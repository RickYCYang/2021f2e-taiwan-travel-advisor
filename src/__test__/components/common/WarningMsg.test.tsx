import { render, cleanup, screen } from "@testing-library/react";
import WarningMsg from "components/common/WarningMsg";

const defaultMsg = "很抱歉，找不到符合此搜尋相關的內容。";
describe("component/common/WarningMsg", () => {
  beforeAll(cleanup);
  test("Icon", () => {
    render(<WarningMsg />);
    const warningIcon = screen.getByTestId("warningIcon");
    expect(warningIcon).toBeInTheDocument;
  });

  test("No Message (Default Message)", () => {
    render(<WarningMsg />);
    const warningMsg = screen.getByText(defaultMsg);
    expect(warningMsg).toBeInTheDocument;
  });

  test("With Message", () => {
    render(<WarningMsg message="test warning message" />);
    const warningMsg = screen.getByText("test warning message");
    expect(warningMsg).toBeInTheDocument;
  });
});
