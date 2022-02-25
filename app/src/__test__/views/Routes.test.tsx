import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Routes from "views/Routes";
import {
  getScenicSpots,
  getScenicSpotsByCity,
  getScenicSpotsByKeyword,
} from "api/scenicspot";
import { getHotels, getHotelsByCity, getHotelsByKeyword } from "api/hotel";
import {
  getRestaurants,
  getRestaurantsByCity,
  getRestaurantsByKeyword,
} from "api/restaurant";
import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from "api/activity";
import {
  getRoutesByCity,
  getStopsByCityAndRouteName,
  getArrivalTimeByCityAndRouteName,
} from "api/traffic";
import { Activity as IActivity } from "components/activity/ActivityCardCollection";
import { Data } from "components/common/CardCollection";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "react-query";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ReactRouter from "react-router";

jest.mock("api/scenicspot");
jest.mock("api/hotel");
jest.mock("api/restaurant");
jest.mock("api/activity");
jest.mock("api/traffic");

const testDataActivity: Array<IActivity> = [
  {
    ActivityID: "ID1",
    ActivityName: "ActivityName1",
    Address: "Address1",
    Charge: "Charge1",
    City: "City1",
    Description: "Description1",
    Name: "Name1",
    Organizer: "Organizer1",
    Picture: { pic1: "pic1" },
    Location: "Location1",
  },
  {
    ActivityID: "ID2",
    ActivityName: "ActivityName2",
    Address: "Address2",
    Charge: "Charge2",
    City: "City2",
    Description: "Description2",
    Name: "Name2",
    Organizer: "Organizer2",
    Picture: { pic1: "pic2" },
    Location: "Location2",
  },
];

const testDataOthers: Array<Data> = [
  {
    Picture: { PictureUrl1: "photo1" },
    Name: "card1",
    Description: "desc1",
    DescriptionDetail: "descDetail1",
    Phone: "phone1",
    Address: "address1",
    City: "city1",
    HotelID: "id1",
    RestaurantID: "id1",
    ScenicSpotID: "id1",
    Class: "class1",
    Fax: "fax1",
    UpdateTime: "updatetime1",
    OpenTime: "opentime1",
    Remarks: "remark1",
    TicketInfo: "ticketInfo1",
    TravelInfo: "TravelInfo1",
  },
  {
    Picture: { PictureUrl1: "photo2" },
    Name: "card2",
    Description: "desc2",
    DescriptionDetail: "descDetail2",
    Phone: "phone2",
    Address: "address2",
    City: "city2",
    HotelID: "id2",
    RestaurantID: "id2",
    ScenicSpotID: "id2",
    Class: "class2",
    Fax: "fax2",
    UpdateTime: "updatetime2",
    OpenTime: "opentime2",
    Remarks: "remark2",
    TicketInfo: "ticketInfo2",
    TravelInfo: "TravelInfo2",
  },
];

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

describe("views/Routes", () => {
  beforeEach(cleanup);
  afterEach(() => {
    jest.clearAllMocks();
  });

  const store = configureStore({ reducer: rootReducer });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  test("Route /", async () => {
    (getScenicSpots as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurants as jest.Mock).mockReturnValue(testDataOthers);
    (getHotels as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivities as jest.Mock).mockReturnValue(testDataActivity);

    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-home");
    await waitFor(() => expect(getScenicSpots).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getHotels).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
  });

  test("Route /:city", async () => {
    (getScenicSpotsByCity as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurantsByCity as jest.Mock).mockReturnValue(testDataOthers);
    (getHotelsByCity as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivitiesByCity as jest.Mock).mockReturnValue(testDataActivity);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-home");
    await waitFor(() => expect(getScenicSpotsByCity).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getRestaurantsByCity).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getHotelsByCity).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(getNewestAcitivitiesByCity).toHaveBeenCalledTimes(1)
    );
  });

  test("Route /scenicSpot", async () => {
    (getScenicSpots as jest.Mock).mockReturnValue(testDataOthers);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({});
    history.push("/scenicSpot");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-scenicspot");
    await waitFor(() => expect(getScenicSpots).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getHotels).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(0));
  });

  test("Route /scenicSpot/:city", async () => {
    (getScenicSpotsByCity as jest.Mock).mockReturnValue(testDataOthers);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });
    history.push("/scenicSpot");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-scenicspot");
    await waitFor(() => expect(getScenicSpotsByCity).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getRestaurantsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getHotelsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() =>
      expect(getNewestAcitivitiesByCity).toHaveBeenCalledTimes(0)
    );
  });

  test("Route /restaurant", async () => {
    (getRestaurants as jest.Mock).mockReturnValue(testDataOthers);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({});
    history.push("/restaurant");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-restaurant");
    await waitFor(() => expect(getScenicSpots).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getHotels).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(0));
  });

  test("Route /restaurant/:city", async () => {
    (getRestaurantsByCity as jest.Mock).mockReturnValue(testDataOthers);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });
    history.push("/restaurant");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-restaurant");
    await waitFor(() => expect(getScenicSpotsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getRestaurantsByCity).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getHotelsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() =>
      expect(getNewestAcitivitiesByCity).toHaveBeenCalledTimes(0)
    );
  });

  test("Route /hotel", async () => {
    (getHotels as jest.Mock).mockReturnValue(testDataOthers);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({});
    history.push("/hotel");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-hotel");
    await waitFor(() => expect(getScenicSpots).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getHotels).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(0));
  });

  test("Route /hotel/:city", async () => {
    (getHotelsByCity as jest.Mock).mockReturnValue(testDataOthers);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });
    history.push("/hotel");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-hotel");
    await waitFor(() => expect(getScenicSpotsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getRestaurantsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getHotelsByCity).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(getNewestAcitivitiesByCity).toHaveBeenCalledTimes(0)
    );
  });

  test("Route /activity", async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue(testDataActivity);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({});
    history.push("/activity");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-activity");
    await waitFor(() => expect(getScenicSpots).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getHotels).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
  });

  test("Route /activity/:city", async () => {
    (getNewestAcitivitiesByCity as jest.Mock).mockReturnValue(testDataActivity);
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });
    history.push("/activity");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-activity");
    await waitFor(() => expect(getScenicSpotsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getRestaurantsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() => expect(getHotelsByCity).toHaveBeenCalledTimes(0));
    await waitFor(() =>
      expect(getNewestAcitivitiesByCity).toHaveBeenCalledTimes(1)
    );
  });

  test("Route /traffic", async () => {
    (getRoutesByCity as jest.Mock).mockReturnValue(testDataRoute);
    (getStopsByCityAndRouteName as jest.Mock).mockReturnValue(testDataStop);
    (getArrivalTimeByCityAndRouteName as jest.Mock).mockReturnValue(
      testDataArriveTime
    );
    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({});
    history.push("/traffic");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const searchbar = await screen.findAllByTestId("searchbar");
    const routeFlow = await screen.findByTestId("routeFlow");
    const hintMsg = await screen.findByText("*每隔15秒自動更新");
    expect(searchbar).toBeInTheDocument;
    expect(routeFlow).toBeInTheDocument;
    expect(hintMsg).toBeInTheDocument;
  });

  test("Route /search", async () => {
    (getScenicSpotsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurantsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getHotelsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivitiesByKeyword as jest.Mock).mockReturnValue(
      testDataActivity
    );

    const history = createMemoryHistory();
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({});
    history.push("/search?q=音樂祭");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </Router>
      </Provider>
    );

    const banner = await screen.findByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-search");
    await waitFor(() =>
      expect(getScenicSpotsByKeyword).toHaveBeenCalledTimes(1)
    );
    await waitFor(() =>
      expect(getRestaurantsByKeyword).toHaveBeenCalledTimes(1)
    );
    await waitFor(() => expect(getHotelsByKeyword).toHaveBeenCalledTimes(1));

    await waitFor(() =>
      expect(getNewestAcitivitiesByKeyword).toHaveBeenCalledTimes(1)
    );
  });
});
