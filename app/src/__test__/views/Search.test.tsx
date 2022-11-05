import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Search from "views/Search";
import { getScenicSpotsByKeyword } from "api/scenicspot";
import { getRestaurantsByKeyword } from "api/restaurant";
import { getNewestAcitivitiesByKeyword } from "api/activity";
import { getHotelsByKeyword } from "api/hotel";
import { Data } from "components/common/CardCollection";
import { Activity as IActivity } from "components/activity/ActivityCardCollection";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "react-query";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
//import useQueryParam from "hooks/useQueryParam";

jest.mock("api/scenicspot");
jest.mock("api/restaurant");
jest.mock("api/activity");
jest.mock("api/hotel");

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

describe("views/Search", () => {
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

  test("has banner", () => {
    (getScenicSpotsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurantsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getHotelsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivitiesByKeyword as jest.Mock).mockReturnValue(
      testDataActivity
    );
    history.push("/search?q=音樂祭");
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Search />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-search");
  });

  test("Has cards", async () => {
    (getScenicSpotsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getRestaurantsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getHotelsByKeyword as jest.Mock).mockReturnValue(testDataOthers);
    (getNewestAcitivitiesByKeyword as jest.Mock).mockReturnValue(
      testDataActivity
    );
    history.push("/search?q=音樂祭");

    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Search />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const cards = await screen.findAllByTestId("card");
    const activityCards = await screen.findAllByTestId("activityCard");
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
    await waitFor(() => expect(cards.length).toBe(6));
    await waitFor(() => expect(activityCards.length).toBe(2));
  });
});
