import { render, screen, cleanup } from "@testing-library/react";
import CityCollection from "components/city/CityCollection";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import cities from "const/cities";

describe("component/city/CityCollection", () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    cleanup();
    render(
      <Router history={history}>
        <CityCollection />
      </Router>
    );
  });

  test("render", () => {
    cities.forEach((city) => {
      expect(screen.getByText(city.label)).toBeInTheDocument;
    });
  });
});
