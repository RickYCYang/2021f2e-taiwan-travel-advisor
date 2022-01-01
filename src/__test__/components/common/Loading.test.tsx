import { render, cleanup, screen } from "@testing-library/react";
import Loading from "components/common/Loading";

describe("component/common/Loading", () => {
  beforeEach(cleanup);

  test("render", () => {
    render(<Loading />);
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument;
  });
});
