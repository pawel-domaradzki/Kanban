import { render, fireEvent } from "@testing-library/react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { ThemeProvider } from "@/components/ThemeProvider";
import { act } from "react-dom/test-utils";

describe("ThemeSwitch", () => {
  it("changes theme on switch and updates body class", async () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );

    const switchButton = getByRole("switch");

    expect(switchButton.getAttribute("aria-checked")).toBe("false");

    await act(async () => {
      fireEvent.click(switchButton);
    });

    expect(switchButton.getAttribute("aria-checked")).toBe("true");
  });
});
