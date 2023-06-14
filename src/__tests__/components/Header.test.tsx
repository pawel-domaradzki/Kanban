import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import Logo from "@/components/Logo";

describe("Header Component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render a logo", () => {
    render(<Logo />);

    const logoMobile = screen.getAllByRole("img", {
      name: /Logo Mobile/i,
    })[1];
    const logoDesktop = screen.getAllByRole("img", {
      name: /Logo Desktop/i,
    })[1];
    expect(logoDesktop).toBeInTheDocument();
    expect(logoMobile).toBeInTheDocument();
  });

  it("should render display boards", () => {
    const button = screen.getByRole("button", {
      name: /Display Boards/i,
      expanded: false,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-haspopup", "dialog");
    expect(button).toHaveAttribute("data-state", "closed");
  });

  it("should render a button with 'Add' type", () => {
    const addButton = screen.getByRole("button", { name: /PrimaryAdd/i });
    expect(addButton).toBeInTheDocument();
  });

  it("should render board options", () => {
    const button = screen.getByRole("button", {
      name: /Board Options/i,
      expanded: false,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-haspopup", "dialog");
    expect(button).toHaveAttribute("data-state", "closed");
    expect(button).toHaveClass("PopoverBtn");
  });
});
