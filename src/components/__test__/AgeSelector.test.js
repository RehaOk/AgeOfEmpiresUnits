import React from "react";
import AgeSelector from "../AgeSelector";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Tabs render with correct text", () => {
  const { getByTestId } = render(<AgeSelector />);
  const toggleAll = getByTestId("toggle-all");
  const toggleDark = getByTestId("toggle-dark");
  const toggleFeudal = getByTestId("toggle-feudal");
  const toggleCastle = getByTestId("toggle-castle");
  const toggleImperial = getByTestId("toggle-imperial");

  expect(toggleAll.textContent).toBe("All");
  expect(toggleDark.textContent).toBe("Dark");
  expect(toggleFeudal.textContent).toBe("Feudal");
  expect(toggleCastle.textContent).toBe("Castle");
  expect(toggleImperial.textContent).toBe("Imperial");
});
