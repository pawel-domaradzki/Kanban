import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/ui/ThemeToggle";

jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeToggle Component", () => {
  it("sets the theme correctly when each button is clicked", () => {
    const setTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({ setTheme });

    render(<ThemeToggle />);

    fireEvent.click(screen.getByText("light"));
    expect(setTheme).toHaveBeenCalledWith("light");

    fireEvent.click(screen.getByText("dark"));
    expect(setTheme).toHaveBeenCalledWith("dark");

    fireEvent.click(screen.getByText("system"));
    expect(setTheme).toHaveBeenCalledWith("system");
  });
});
