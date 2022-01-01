import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Activity from "views/Activity";
import { getNewestAcitivities, getNewestAcitivitiesByCity } from "api/activity";
import { Activity as IActivity } from "components/activity/ActivityCardCollection";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "react-query";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ReactRouter from "react-router";
jest.mock("api/activity");

const testData: Array<IActivity> = [
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

describe("views/Activity", () => {
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
    (getNewestAcitivities as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Activity />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument;
    expect(banner.firstChild).toHaveClass("lg:bg-activity");
  });

  test("Has cards", async () => {
    (getNewestAcitivities as jest.Mock).mockReturnValue(testData);
    render(
      <Provider store={store}>
        <Router history={history}>
          <QueryClientProvider client={queryClient}>
            <Activity />
          </QueryClientProvider>
        </Router>
      </Provider>
    );
    const activityCards = await screen.findAllByTestId("activityCard");
    await waitFor(() => expect(getNewestAcitivities).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(activityCards.length).toBe(2));
  });

  test("with city path param", async () => {
    (getNewestAcitivitiesByCity as jest.Mock).mockReturnValue(testData);
    jest.spyOn(ReactRouter, "useParams").mockReturnValue({ city: "Taipei" });

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router history={history}>
            <Activity />
          </Router>
        </QueryClientProvider>
      </Provider>
    );
    expect(getNewestAcitivitiesByCity).toBeCalledTimes(1);
  });
});
