import { render } from "@testing-library/react";
import App from "./App";

test("renders app components", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("top-bar")).toBeInTheDocument();
  expect(getByTestId("home-page-view-index")).toBeInTheDocument();
});
