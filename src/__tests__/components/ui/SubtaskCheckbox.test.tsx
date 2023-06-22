import { render, screen, fireEvent } from "@testing-library/react";
import SubtaskCheckbox from "@/components/ui/SubtaskCheckbox";

describe("SubtaskCheckbox", () => {
  test("renders label text", () => {
    const { getByText } = render(
      <SubtaskCheckbox
        label="Test Label"
        completed={false}
        onChange={() => {}}
      />
    );
    const labelElement = getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("checkbox starts unchecked", () => {
    const { getByLabelText } = render(
      <SubtaskCheckbox
        label="Test Label"
        completed={false}
        onChange={() => {}}
      />
    );
    const checkbox = getByLabelText(/Test Label/i);
    expect(checkbox).not.toBeChecked();
  });

  test("checkbox starts checked", () => {
    const { getByLabelText } = render(
      <SubtaskCheckbox
        label="Test Label"
        completed={true}
        onChange={() => {}}
      />
    );
    const checkbox = getByLabelText(/Test Label/i);
    expect(checkbox).toBeChecked();
  });

  test("checkbox calls onChange handler when clicked", () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <SubtaskCheckbox
        label="Test Label"
        completed={false}
        onChange={mockOnChange}
      />
    );
    const checkbox = getByLabelText(/Test Label/i);
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
