import { render, screen, cleanup } from "@testing-library/react";
import Card from "components/common/Card";
import userEvent from "@testing-library/user-event";

describe("component/common/Card", () => {
  beforeEach(cleanup);

  test("render", () => {
    const mockFunc = jest.fn();
    render(
      <Card
        title="title"
        address="address"
        picture="picture"
        city="city"
        onClick={mockFunc}
      />
    );
    const title = screen.getByText("title");
    const address = screen.getByText("address");
    const image = screen.getByRole("img");
    expect(title).toBeInTheDocument;
    expect(address).toBeInTheDocument;
    expect(image).toBeInTheDocument;
  });

  test("onClick", () => {
    const mockFunc = jest.fn();
    render(
      <Card
        title="title"
        address="address"
        picture="picture"
        city="city"
        onClick={mockFunc}
      />
    );
    const card = screen.getByTestId("card");
    userEvent.click(card);
    expect(mockFunc).toBeCalledTimes(1);
  });
});
