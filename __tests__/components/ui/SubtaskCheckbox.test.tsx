import { render, screen, fireEvent } from "@testing-library/react";
import SubtaskCheckbox from "@/components/ui/SubtaskCheckbox";

describe("SubtaskCheckbox", () => {
  it("responds to user clicks", async () => {
    render(<SubtaskCheckbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
