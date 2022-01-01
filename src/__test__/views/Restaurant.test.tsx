import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Restaurant from "views/Restaurant";
import { getRestaurants, getRestaurantsByCity } from "api/restaurant";
import { Data } from "components/common/CardCollection";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "react-query";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ReactRouter from "react-router";
jest.mock("api/restaurant");

const testData: Array<Data> = [
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

describe("views/Restaurant", () => {
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
    (getRestaurants as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Restaurant />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-restaurant");
  });

  test("Has cards", async () => {
    (getRestaurants as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Restaurant />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const cards = await screen.findAllByTestId("card");
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(cards.length).toBe(2));
  });

  test("with city path param", async () => {
    (getRestaurantsByCity as jest.Mock).mockReturnValue(testData);
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>
            <Restaurant />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
    expect(getRestaurantsByCity).toBeCalledTimes(1);
  });
});
