import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Citythumbnail from "components/city/CityThumbnail";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("component/city/Citythumbnail", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    cleanup();
    render(
      <Router history={history}>
        <Citythumbnail city={{ label: "台北市", value: "Taipei" }} small />
      </Router>
    );
  });

  test("click Citythumbnail", () => {
    const citythumbnail = screen.getByTestId("citythumbnail");
    userEvent.click(citythumbnail);
    expect(history.location.pathname).toBe("/Taipei");
  });
});
