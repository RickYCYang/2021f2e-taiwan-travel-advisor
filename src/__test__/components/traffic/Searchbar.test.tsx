import { render, screen, cleanup, waitFor } from "@testing-library/react";
import selectEvent from "react-select-event";
import userEvent from "@testing-library/user-event";
import Searchbar from "components/traffic/Searchbar";
import {
  getRoutesByCity,
  getStopsByCityAndRouteName,
  getArrivalTimeByCityAndRouteName,
} from "api/traffic";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
jest.mock("api/traffic");

const testDataRoute = [
  {
    RouteName: { Zh_tw: "702" },
    DepartureStopNameZh: "三峽",
    DestinationStopNameZh: "板橋公車站",
  },
  {
    RouteName: { Zh_tw: "242" },
    DepartureStopNameZh: "中和",
    DestinationStopNameZh: "西門",
  },
];

const testDataStop = [
  {
    Direction: 0,
    RouteName: {
      En: "702",
      Zh_tw: "702",
    },
    Stops: [
      {
        StationID: "72700",
        StopBoarding: 0,
        StopID: "199450",
        StopName: { Zh_tw: "三峽一站", En: "Gorges one station" },
        StopPosition: {
          PositionLon: 121.3671087,
          PositionLat: 24.937581,
          GeoHash: "wsqmcg8zf",
        },
        StopSequence: 1,
        StopUID: "NWT199450",
      },
      {
        StationID: "3267",
        StopBoarding: -1,
        StopID: "33898",
        StopName: {
          Zh_tw: "三峽國小(三鶯國民運動中心)",
          En: "Sanxia Elementary School",
        },
        StopPosition: {
          PositionLon: 121.36942,
          PositionLat: 24.93599,
          GeoHash: "wsqmcg6w8",
        },
        StopSequence: 2,
        StopUID: "NWT33898",
      },
    ],
  },
  {
    Direction: 1,
    RouteName: { Zh_tw: "702", En: "702" },
    Stops: [
      {
        StationID: "6187",
        StopBoarding: 0,
        StopID: "33976",
        StopName: { Zh_tw: "萬坪公園", En: "Wanping Park" },
        StopPosition: {
          PositionLon: 121.460677,
          PositionLat: 25.01352,
          GeoHash: "wsqq7csfq",
        },
        StopSequence: 1,
        StopUID: "NWT33976",
        UpdateTime: "2021-12-31T00:24:58+08:00",
        VersionID: 1819,
      },
    ],
  },
];

const testDataArriveTime = [
  {
    Direction: 1,
    RouteID: "10148",
    RouteName: { Zh_tw: "702", En: "702" },
    RouteUID: "NWT10148",
    SrcUpdateTime: "2021-12-31T01:00:50+08:00",
    StopID: "202963",
    StopName: { Zh_tw: "樂山一", En: "Leshan 1" },
    StopStatus: 3,
    StopUID: "NWT202963",
    UpdateTime: "2021-12-31T01:00:54+08:00",
  },
  {
    Direction: 0,
    RouteID: "10148",
    RouteName: { Zh_tw: "702", En: "702" },
    RouteUID: "NWT10148",
    SrcUpdateTime: "2021-12-31T01:00:50+08:00",
    StopID: "206645",
    StopName: { Zh_tw: "鶯歌火車站", En: "Yingge Rail Sta." },
    StopStatus: 3,
    StopUID: "NWT206645",
    UpdateTime: "2021-12-31T01:00:54+08:00",
  },
];

describe("components/traffic/Searchbar", () => {
  beforeEach(cleanup);
  const history = createMemoryHistory();
  const store = configureStore({ reducer: rootReducer });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  test("initial", async () => {
    (getRoutesByCity as jest.Mock).mockReturnValue(testDataRoute);
    (getStopsByCityAndRouteName as jest.Mock).mockReturnValue(testDataStop);
    (getArrivalTimeByCityAndRouteName as jest.Mock).mockReturnValue(
      testDataArriveTime
    );

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>
            <label htmlFor="citySelector">City</label>
            <label htmlFor="routeSelector">Route</label>
            <Searchbar />
          </Router>
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => expect(getRoutesByCity).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(getStopsByCityAndRouteName).toHaveBeenCalledTimes(1)
    );
    await waitFor(() =>
      expect(getArrivalTimeByCityAndRouteName).toHaveBeenCalledTimes(1)
    );
    expect(store.getState().route.stops[0]).toBe(testDataStop[0].Stops[0]);
  });

  test("Change city & route selector and direction button", async () => {
    (getRoutesByCity as jest.Mock).mockReturnValue(testDataRoute);
    (getStopsByCityAndRouteName as jest.Mock).mockReturnValue(testDataStop);
    (getArrivalTimeByCityAndRouteName as jest.Mock).mockReturnValue(
      testDataArriveTime
    );

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>
            <label htmlFor="citySelector">City</label>
            <label htmlFor="routeSelector">Route</label>
            <Searchbar />
          </Router>
        </QueryClientProvider>
      </Provider>
    );

    await selectEvent.select(screen.getByLabelText("City"), ["新北市"]);
    await waitFor(() => expect(getRoutesByCity).toHaveBeenCalledTimes(2));
    expect(screen.getByText("新北市")).toBeInTheDocument;
    await selectEvent.select(screen.getByLabelText("Route"), ["702"]);
    expect(screen.getAllByText("702")).toBeInTheDocument;
    expect(screen.getByText("三峽")).toBeInTheDocument;
    const destBtn = screen.getByText("板橋公車站");
    expect(destBtn).toBeInTheDocument;
    userEvent.click(destBtn);
    expect(store.getState().route.stops[0]).toBe(testDataStop[1].Stops[0]);
  });
});
