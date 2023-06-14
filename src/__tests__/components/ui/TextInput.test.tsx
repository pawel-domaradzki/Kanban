import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "@/components/ui/TextInput";

describe("TextInput", () => {
  it("renders without crashing", () => {
    render(<TextInput placeholder="" />);
  });

  it("renders with correct placeholder", () => {
    const placeholder = "Enter text";
    render(<TextInput placeholder={placeholder} />);
    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
  });
});
