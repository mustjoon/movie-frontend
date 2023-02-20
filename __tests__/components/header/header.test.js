import { render } from "@testing-library/react";
import Header from "@/components/header/header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders ok", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
