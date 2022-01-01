import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Home from "views/Home";
import { getScenicSpots, getScenicSpotsByCity } from "api/scenicspot";
import { getHotels, getHotelsByCity } from "api/hotel";
import { getRestaurants, getRestaurantsByCity } from "api/restaurant";
import { getNewestAcitivities, getNewestAcitivitiesByCity } from "api/activity";
import { Data } from "components/common/CardCollection";
import { Activity as IActivity } from "components/activity/ActivityCardCollection";
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

describe("views/Home", () => {
  beforeEach(cleanup);
  const store = configureStore({ reducer: rootReducer });
  const history = createMemoryHistory();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  test("Has banner", async () => {
    (getScenicSpots as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurants as jest.Mock).mockReturnValue(testDataOthers);
    (getHotels as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivities as jest.Mock).mockReturnValue(testDataActivity);
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Home />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-home");
  });

  test("Has cards", async () => {
    (getScenicSpots as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurants as jest.Mock).mockReturnValue(testDataOthers);
    (getHotels as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivities as jest.Mock).mockReturnValue(testDataActivity);
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Home />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const cards = await screen.findAllByTestId("card");
    const activityCards = await screen.findAllByTestId("activityCard");
    await waitFor(() => expect(getScenicSpots).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getHotels).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(cards.length).toBe(6));
    await waitFor(() => expect(activityCards.length).toBe(2));
  });

  test("with city path param", async () => {
    (getScenicSpotsByCity as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurantsByCity as jest.Mock).mockReturnValue(testDataOthers);
    (getHotelsByCity as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivitiesByCity as jest.Mock).mockReturnValue(testDataActivity);
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>
            <Home />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
    expect(getScenicSpotsByCity).toBeCalledTimes(1);
    expect(getRestaurantsByCity).toBeCalledTimes(1);
    expect(getHotelsByCity).toBeCalledTimes(1);
    expect(getNewestAcitivitiesByCity).toBeCalledTimes(1);
  });
});
