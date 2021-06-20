import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import UnitDetailPageViewIndex, { listCosts, formatObjectKey } from "../index";

test("listCosts functions correctly", () => {
  const costObj = {
    food: 10,
    wood: 10,
  };

  expect(listCosts(costObj)).toBe("food: 10 - wood: 10");
});

test("formatObjectKey functions correctly", () => {
  const testString = "some_object_property";

  expect(formatObjectKey(testString)).toBe("Some Object Property");
});

test("expect content to be rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <UnitDetailPageViewIndex />
    </BrowserRouter>,
  );
  const unitDetailPageViewIndex = getByTestId("unit-detail-page-view-index");

  expect(unitDetailPageViewIndex).toBeInTheDocument();
});

test("renders correctly according to history", () => {
  const history = createMemoryHistory(/* { initialEntries: ["/unitDetail"] } */);
  const { getByTestId } = render(
    <Router history={history}>
      <UnitDetailPageViewIndex />
    </Router>,
  );
  history.push({
    pathname: "/unitDetail",
    state: {
      unitDetail: {
        accuracy: "85%",
        age: "Castle",
        armor: "0/0",
        attack: 5,
        attack_bonus: ["+3 spearmen"],
        attack_delay: 0.35,
        build_time: 27,
        cost: { Wood: 25, Gold: 45 },
        description: "Upgraded archer",
        expansion: "Age of Kings",
        hit_points: 35,
        id: 2,
        line_of_sight: 7,
        movement_rate: 0.96,
        name: "Crossbowman",
        range: 5,
        reload_time: 2,
        tableData: { id: 0 },
      },
    },
  });
  const unitDetailCard = getByTestId("unit-detail-card");
  expect(unitDetailCard.innerHTML).not.toBe("");
  history.push("/");
  expect(unitDetailCard.innerHTML).toBe("");
  console.log("res");
});
