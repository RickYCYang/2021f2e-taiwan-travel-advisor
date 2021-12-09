import { fireEvent, cleanup, render, screen } from "@testing-library/react";
import App from "../App";

describe("Test <App/>", () => {
  beforeEach(cleanup);
  // const { getByText, getByTestId } = render(
  //   <Provider store={store}>
  //     <MessageBoxText {...userMessageString} />
  //   </Provider>
  // );
  test("test", () => {
    expect(1 + 1).toBe(2);
  });
});
