import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "components/common/Header";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("components/common/Header", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    cleanup();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );
  });

  test("Render Nav link", () => {
    const homeLink = screen.getByText("Taiwan Tourguide");
    const scenicspotLink = screen.getByText("景點");
    const activityLink = screen.getByText("活動");
    const restaurantLink = screen.getByText("美食");
    const hotelLink = screen.getByText("住宿");
    const trafficLink = screen.getByText("交通");

    expect(homeLink).toBeInTheDocument;
    expect(scenicspotLink).toBeInTheDocument;
    expect(activityLink).toBeInTheDocument;
    expect(restaurantLink).toBeInTheDocument;
    expect(hotelLink).toBeInTheDocument;
    expect(trafficLink).toBeInTheDocument;
  });

  test("Click logo link", () => {
    const homeLink = screen.getByText("Taiwan Tourguide");
    const scenicspotLink = screen.getByText("景點");

    userEvent.click(homeLink);
    expect(history.location.pathname).toBe("/");
    userEvent.click(scenicspotLink);
    expect(history.location.pathname).toBe("/scenicspot");
    userEvent.click(homeLink);
    expect(history.location.pathname).toBe("/");
  });

  test("Click scenic spot link", () => {
    const scenicspotLink = screen.getByText("景點");
    userEvent.click(scenicspotLink);
    expect(history.location.pathname).toBe("/scenicspot");
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
