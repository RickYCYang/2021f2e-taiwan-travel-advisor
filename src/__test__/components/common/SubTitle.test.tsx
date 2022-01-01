import { render, cleanup, screen } from "@testing-library/react";
import SubTitle from "components/common/SubTitle";

describe("component/common/SubTitle", () => {
  beforeEach(cleanup);

  test("icon=triangle", () => {
    render(<SubTitle subTitle="Test" icon="triangle" />);
    const subTitle = screen.getByText("Test");
    expect(screen.getByTestId("triangle")).toBeInTheDocument;
  });

  test("icon=rectangle", () => {
    render(<SubTitle subTitle="Test" icon="rectangle" />);
    const subTitle = screen.getByText("Test");
    expect(screen.getByTestId("rectangle")).toBeInTheDocument;
  });

  test("icon=cloud", () => {
    render(<SubTitle subTitle="Test" icon="cloud" />);
    const subTitle = screen.getByText("Test");
    expect(screen.getByTestId("cloud")).toBeInTheDocument;
  });
});
