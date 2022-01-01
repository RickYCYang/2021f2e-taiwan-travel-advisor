import { render, screen, cleanup } from "@testing-library/react";
import ActivityCard from "components/activity/ActivityCard";
import { Activity } from "components/activity/ActivityCardCollection";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import rootReducer from "redux/slices";
import { configureStore } from "@reduxjs/toolkit";

const testData: Activity = {
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
};

describe("components/activity/ActivityCard", () => {
  beforeEach(cleanup);
  const store = configureStore({ reducer: rootReducer });

  test("render", () => {
    render(
      <Provider store={store}>
        <ActivityCard activity={testData} />
      </Provider>
    );
    expect(screen.getByText(testData.Name)).toBeInTheDocument;
    expect(screen.getByText(testData.Description ?? "")).toBeInTheDocument;
    expect(screen.getByText(testData.Location ?? "")).toBeInTheDocument;
  });

  test("open modal", () => {
    render(
      <Provider store={store}>
        <ActivityCard activity={testData} />
      </Provider>
    );
    const openModalBtn = screen.getByText("活動詳情");
    userEvent.click(openModalBtn);
    expect(store.getState().modal.show).toBe(true);
  });
});
