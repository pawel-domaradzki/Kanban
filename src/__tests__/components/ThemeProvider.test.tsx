import { render } from "@testing-library/react";
import { ThemeProvider } from "@/components/ThemeProvider";

describe("ThemeProvider", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Child Component</div>
      </ThemeProvider>
    );

    expect(getByText("Child Component")).toBeInTheDocument();
  });
});
