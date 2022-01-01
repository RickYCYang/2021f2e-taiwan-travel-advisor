import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActivityCardCollection, {
  Activity,
} from "components/activity/ActivityCardCollection";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from "api/activity";
import { QueryClient, QueryClientProvider } from "react-query";
jest.mock("api/activity");

const testData: Array<Activity> = [
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

describe("components/activity/ActivityCardCollection", () => {
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

  test("render without city and keyword", async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ActivityCardCollection />
        </QueryClientProvider>
      </Provider>
    );

    const activityCards = await screen.findAllByTestId("activityCard");
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(activityCards.length).toBe(2));
  });

  test("render with city", async () => {
    (getNewestAcitivitiesByCity as jest.Mock).mockReturnValue(testData);

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ActivityCardCollection city={"Taipei"} />
        </QueryClientProvider>
      </Provider>
    );

    const activityCards = await screen.findAllByTestId("activityCard");
    await waitFor(() =>
      expect(getNewestAcitivitiesByCity).toHaveBeenCalledTimes(1)
    );
    await waitFor(() => expect(activityCards.length).toBe(2));
  });

  test("render with keyword", async () => {
    (getNewestAcitivitiesByKeyword as jest.Mock).mockReturnValue(testData);

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ActivityCardCollection keyword={"Taipei"} />
        </QueryClientProvider>
      </Provider>
    );

    const activityCards = await screen.findAllByTestId("activityCard");
    await waitFor(() =>
      expect(getNewestAcitivitiesByKeyword).toHaveBeenCalledTimes(1)
    );
    await waitFor(() => expect(activityCards.length).toBe(2));
  });

  test("render with defaultCount", async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue([testData[0]]);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ActivityCardCollection defaultCount={1} />
        </QueryClientProvider>
      </Provider>
    );

    const activityCards = await screen.findAllByTestId("activityCard");
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(activityCards.length).toBe(1));
  });

  test("Load more button", async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue([testData[0]]);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ActivityCardCollection defaultCount={1} />
        </QueryClientProvider>
      </Provider>
    );

    const activityCards = await screen.findAllByTestId("activityCard");
    expect(getNewestAcitivities).toHaveBeenCalledTimes(1);
    expect(activityCards.length).toBe(1);
    const loadmoreBtn = await screen.findByText("Load More");
    expect(loadmoreBtn).toBeInTheDocument;
    userEvent.click(loadmoreBtn);
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(2));
  });

  test("No activity found", async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue([]);
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ActivityCardCollection defaultCount={1} />
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
    const WarningMsg = screen.getByText("很抱歉，找不到符合此搜尋相關的內容。");
    expect(WarningMsg).toBeInTheDocument;
  });
});
