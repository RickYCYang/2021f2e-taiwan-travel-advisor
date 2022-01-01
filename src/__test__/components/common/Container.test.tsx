import { render, cleanup, screen } from "@testing-library/react";
import Container from "components/common/Container";

describe("component/common/Container", () => {
  beforeEach(cleanup);

  test("className", () => {
    const className = "className";
    render(<Container className={className} />);
    expect(screen.getByTestId("container")).toHaveClass(className);
  });

  test("children", () => {
    const children = <a data-testid="test">Test</a>;
    render(<Container>{children}</Container>);
    let _children = screen.getByTestId("test");
    expect(_children).toBeInTheDocument;
    expect(screen.getByTestId("container")).toContainElement(_children);
  });
});
