import { render, screen, cleanup } from "@testing-library/react";
import MobileNavbar from "components/common/MobileNavbar";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("components/common/MobileNavbar", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    cleanup();
    render(
      <Router history={history}>
        <MobileNavbar />
      </Router>
    );
  });

  test("Render Nav link", () => {
    const activityLink = screen.getByText("活動");
    const restaurantLink = screen.getByText("美食");
    const hotelLink = screen.getByText("住宿");
    const trafficLink = screen.getByText("交通");

    expect(activityLink).toBeInTheDocument;
    expect(restaurantLink).toBeInTheDocument;
    expect(hotelLink).toBeInTheDocument;
    expect(trafficLink).toBeInTheDocument;
  });

  test("Click activity link", () => {
    const activityLink = screen.getByText("活動");
    userEvent.click(activityLink);
    expect(history.location.pathname).toBe("/activity");
  });

  test("Click restaurantLink link", () => {
    const restaurantLink = screen.getByText("美食");
    userEvent.click(restaurantLink);
    expect(history.location.pathname).toBe("/restaurant");
  });

  test("Click hotelLink link", () => {
    const hotelLink = screen.getByText("住宿");
    userEvent.click(hotelLink);
    expect(history.location.pathname).toBe("/hotel");
  });

  test("Click trafficLink link", () => {
    const trafficLink = screen.getByText("交通");
    userEvent.click(trafficLink);
    expect(history.location.pathname).toBe("/traffic");
  });
});
