import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown, { SelectItem } from "@/components/ui/Dropdown";

import { ColumnTypes } from "@/types";

describe("Dropdown Component", () => {
  const mockOnChange = jest.fn();

  const items: ColumnTypes[] = [
    { id: "1", title: "Column 1", ovalColor: "#fff", tasks: [] },
    { id: "2", title: "Column 2", ovalColor: "#fff", tasks: [] },
  ];

  beforeEach(() => {
    render(
      <Dropdown
        items={items}
        onChange={mockOnChange}
        defaultValue={items[0].title}
      />
    );
  });

  test("renders dropdown trigger with default value", () => {
    expect(screen.getByText(items[0].title)).toBeInTheDocument();
  });

  test("SelectItem has correct display name", () => {
    expect(SelectItem.displayName).toBe("SelectItem");
  });
});
