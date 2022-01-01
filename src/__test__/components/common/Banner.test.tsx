import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Banner from "components/common/Banner";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import selectEvent from "react-select-event";

describe("component/common/banner", () => {
  beforeEach(cleanup);

  test("render", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <Banner />
      </MemoryRouter>
    );
    const _banner = screen.getByTestId("banner");
    expect(_banner).toBeInTheDocument;
  });

  test("search input", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <Banner />
      </MemoryRouter>
    );
    const text = "Hello World";
    const searchInput = screen.getByPlaceholderText("搜尋關鍵字");
    userEvent.type(searchInput, text);
    expect(searchInput).toHaveValue(text);
  });

  test("click search by keyword button", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Banner />
      </Router>
    );
    const text = "台北";
    const searchInput = screen.getByPlaceholderText("搜尋關鍵字");
    const searchButton = screen.getAllByRole("button")[0];
    userEvent.type(searchInput, text);
    userEvent.click(searchButton);
    expect(history.location.pathname).toBe("/search");
    expect(history.location.search).toBe(`?q=${text}`);
    expect(searchInput).toHaveValue(text);
  });

  test("Select category and City selector", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <label htmlFor="catgSelector">Category</label>
        <label htmlFor="citySelector">City</label>
        <Banner />
      </Router>
    );

    await selectEvent.select(screen.getByLabelText("Category"), ["活動"]);
    expect(screen.getAllByText("活動")).toBeInTheDocument;
    await selectEvent.select(screen.getByLabelText("City"), ["臺北市"]);
    expect(screen.getAllByText("臺北市")).toBeInTheDocument;
  });

  test("click search by category and city button", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <label htmlFor="catgSelector">Category</label>
        <label htmlFor="citySelector">City</label>
        <Banner />
      </Router>
    );

    await selectEvent.select(screen.getByLabelText("Category"), ["活動"]);
    expect(screen.getAllByText("活動")).toBeInTheDocument;
    await selectEvent.select(screen.getByLabelText("City"), ["臺北市"]);
    expect(screen.getAllByText("臺北市")).toBeInTheDocument;
    const searchButton = screen.getAllByRole("button")[1];
    userEvent.click(searchButton);
    expect(history.location.pathname).toBe("/activity/Taipei");
  });

  test("MobileNavbar", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Banner />
      </Router>
    );
    const mobileNavbar = screen.getByTestId("MobileNavbar");
    expect(mobileNavbar).toBeInTheDocument;
  });
});
