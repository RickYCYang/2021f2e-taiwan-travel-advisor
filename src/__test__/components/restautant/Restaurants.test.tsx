import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Restaurants from "components/restautant/Restaurants";
import { Data } from "components/common/CardCollection";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import {
  getRestaurants,
  getRestaurantsByCity,
  getRestaurantsByKeyword,
} from "api/restaurant";
import { QueryClient, QueryClientProvider } from "react-query";
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

describe("component/hotel/hotels", () => {
  beforeEach(cleanup);
  const store = configureStore({ reducer: rootReducer });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        retry: false,
      },
    },
  });

  test("default", async () => {
    (getRestaurants as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Restaurants />
        </QueryClientProvider>
      </Provider>
    );
    const subTitle = screen.getByText("熱門餐飲");
    const cards = await screen.findAllByTestId("card");
    expect(getRestaurants).toHaveBeenCalledTimes(1);
    expect(subTitle).toBeInTheDocument;
    expect(cards.length).toBe(2);
  });

  test("render with city", async () => {
    (getRestaurantsByCity as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Restaurants city="Taipei" />
        </QueryClientProvider>
      </Provider>
    );
    const subTitle = screen.getByText("熱門餐飲");
    const cards = await screen.findAllByTestId("card");
    expect(getRestaurantsByCity).toHaveBeenCalledTimes(1);
    expect(subTitle).toBeInTheDocument;
    expect(cards.length).toBe(2);
  });

  test("render with keyword", async () => {
    (getRestaurantsByKeyword as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Restaurants keyword="台北" />
        </QueryClientProvider>
      </Provider>
    );
    const subTitle = screen.getByText("熱門餐飲");
    const cards = await screen.findAllByTestId("card");
    expect(getRestaurantsByKeyword).toHaveBeenCalledTimes(1);
    expect(subTitle).toBeInTheDocument;
    expect(cards.length).toBe(2);
  });

  test("render with defaultCount", async () => {
    (getRestaurants as jest.Mock).mockReturnValue([testData[0]]);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Restaurants defaultCount={1} />
        </QueryClientProvider>
      </Provider>
    );

    const cards = await screen.findAllByTestId("card");
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(cards.length).toBe(1));
  });

  test("Load more button", async () => {
    (getRestaurants as jest.Mock).mockReturnValue([testData[0]]);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Restaurants defaultCount={1} />
        </QueryClientProvider>
      </Provider>
    );

    const cards = await screen.findAllByTestId("card");
    expect(getRestaurants).toHaveBeenCalledTimes(1);
    expect(cards.length).toBe(1);
    const loadmoreBtn = await screen.findByText("Load More");
    expect(loadmoreBtn).toBeInTheDocument;
    userEvent.click(loadmoreBtn);
    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(2));
  });

  test("No activity found", async () => {
    (getRestaurants as jest.Mock).mockReturnValue([]);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Restaurants />
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => expect(getRestaurants).toHaveBeenCalledTimes(1));
    const WarningMsg = screen.getByText("很抱歉，找不到符合此搜尋相關的內容。");
    expect(WarningMsg).toBeInTheDocument;
  });
});
