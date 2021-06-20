import React from "react";
import AppBar from "../AppBar";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("App bar render with correct texts", () => {
  const { getByTestId } = render(<AppBar />);
  const appTitle = getByTestId("app-title");
  const linkHome = getByTestId("link-home");
  const linkUnits = getByTestId("link-units");

  expect(appTitle.textContent).toBe("AgeOfUnitList");
  expect(linkHome.textContent).toBe("Home");
  expect(linkUnits.textContent).toBe("Units");
});

test("App bar test links", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <AppBar />
    </Router>,
  );
  const linkHome = getByTestId("link-home");
  const linkUnits = getByTestId("link-units");

  fireEvent.click(linkHome);
  expect(history.length).toBe(2);
  expect(history.location.pathname).toBe("/");

  fireEvent.click(linkUnits);
  expect(history.location.pathname).toBe("/units");
});
