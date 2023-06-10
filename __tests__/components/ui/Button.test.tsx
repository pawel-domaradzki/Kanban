import React from "react";
import { render, screen } from "@testing-library/react";
import Button, { ButtonVariant } from "@/components/ui/Button";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button variant={ButtonVariant.Primary}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("has the primary style when variant is primary", () => {
    render(<Button variant={ButtonVariant.Primary}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toHaveClass("Primary");
  });

  it("has the secondary style when variant is secondary", () => {
    render(<Button variant={ButtonVariant.Secondary}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toHaveClass("Secondary");
  });

  it("has the destructive style when variant is destructive", () => {
    render(<Button variant={ButtonVariant.Destructive}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toHaveClass("Destructive");
  });
});
