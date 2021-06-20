import React from "react";
import UnitTable from "../UnitTable";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("forward refs", () => {
  const { getByTestId } = render(<UnitTable />);
  const tableContainer = getByTestId("table-container");
  expect(tableContainer).toBeInTheDocument();
});
