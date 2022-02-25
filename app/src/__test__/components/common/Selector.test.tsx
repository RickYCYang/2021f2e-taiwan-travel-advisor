import { render, cleanup, screen } from "@testing-library/react";
import Selector from "components/common/Selector";
import selectEvent from "react-select-event";

const testOption = [
  { label: "option1", value: "value1" },
  { label: "option2", value: "value2" },
  { label: "option3", value: "value3" },
];

describe("component/common/Selector", () => {
  beforeEach(cleanup);

  test("option initial", () => {
    const mockFunc = jest.fn();
    render(
      <form data-testid="form">
        <label htmlFor="testSelector">Test</label>
        <Selector
          options={testOption}
          name="testSelector"
          value={testOption[0]}
          onChange={mockFunc}
        />
      </form>
    );

    expect(screen.getByTestId("form")).toHaveFormValues({
      testSelector: "value1",
    });
  });

  test("onChange", async () => {
    let ansValue;
    const mockFunc = jest.fn((value) => {
      ansValue = value;
    });

    render(
      <form data-testid="form">
        <label htmlFor="testSelector">Test</label>
        <Selector
          options={testOption}
          name="testSelector"
          value={testOption[0]}
          onChange={mockFunc}
        />
      </form>
    );

    await selectEvent.select(screen.getByLabelText("Test"), ["option2"]);
    expect(ansValue).toBe(testOption[1]);
    expect(mockFunc).toBeCalledTimes(1);

    await selectEvent.select(screen.getByLabelText("Test"), ["option3"]);
    expect(ansValue).toBe(testOption[2]);
    expect(mockFunc).toBeCalledTimes(2);
  });
});
