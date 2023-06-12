import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "@/components/ui/Dropdown";

describe("Dropdown", () => {
  it("renders correctly", () => {
    render(<Dropdown />);

    const dropdownTrigger = screen.getByRole("combobox", {
      name: "TaskStatus",
    });

    expect(dropdownTrigger).toBeInTheDocument();
    expect(dropdownTrigger.textContent).toBe("Doing");
  });
});
