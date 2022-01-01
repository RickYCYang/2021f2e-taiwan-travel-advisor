import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "components/common/Button";

describe("component/common/Button", () => {
  beforeEach(cleanup);

  test("onClick", () => {
    const mockFunc = jest.fn();
    render(<Button title={"test"} onClick={mockFunc} />);
    const button = screen.getByText("test");
    userEvent.click(button);
    expect(mockFunc).toBeCalledTimes(1);
  });

  test("title", () => {
    const mockFunc = jest.fn();
    render(<Button title={"test"} onClick={mockFunc} />);
    const button = screen.getByText("test");
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  test("className", () => {
    const mockFunc = jest.fn();
    const testClassName = "testClassName";
    render(
      <Button title={"test"} onClick={mockFunc} className={testClassName} />
    );
    const button = screen.getByText("test");
    expect(button).toHaveClass(testClassName);
  });
});
