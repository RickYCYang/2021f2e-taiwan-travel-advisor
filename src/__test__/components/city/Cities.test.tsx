import { render, screen, cleanup } from "@testing-library/react";
import Cities from "components/city/Cities";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("component/city/Cities", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    cleanup();
    render(
      <Router history={history}>
        <Cities />
      </Router>
    );
  });

  test("render", () => {
    const title = screen.getByText("熱門城市");
    const cityCollection = screen.getByTestId("cityCollection");
    expect(title).toBeInTheDocument;
    expect(cityCollection).toBeInTheDocument;
  });
});
