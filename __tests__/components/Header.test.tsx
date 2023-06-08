import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component", () => {
  it("renders the children prop correctly", () => {
    render(<Header>Test Content</Header>);

    const headerElement = screen.getByText("Test Content");
    expect(headerElement).toBeInTheDocument();
  });
});
