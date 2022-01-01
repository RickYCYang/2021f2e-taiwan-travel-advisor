import { render, cleanup, screen } from "@testing-library/react";
import Footer from "components/common/Footer";

describe("component/common/Footer", () => {
  beforeEach(cleanup);

  test("render", () => {
    render(<Footer />);
    const footer = screen.getByText(
      "Taiwan Tourguide © Code: Rick YC / Design: KT"
    );
    expect(footer).toBeInTheDocument;
  });
});
