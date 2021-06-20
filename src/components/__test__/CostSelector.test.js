// mock the slider since input is hidden
import React from "react";
import CostSelector from "../CostSelector";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@material-ui/core/Slider", () => (props) => {
  return (
    <input
      type="range"
      defaultValue={props["defaultValue"]}
      step={props["step"]}
      disabled={props["disabled"]}
      data-testid={props["data-testid"]}
      value={props["value"]}
      min={0}
      max={200}
      onChange={(event) => props.onChange(event, event.target.value)}
    />
  );
});

test("Card title is valid", () => {
  const { getByTestId, unmount } = render(
    <CostSelector
      costFilterSelections={{ wood: false, food: false, gold: false }}
      costAmounts={{ "wood-cost": null, "food-cost": null, "gold-cost": null }}
    />,
  );
  const carTitle = getByTestId("card-title");

  expect(carTitle.textContent).toBe("Costs");
  unmount();
});

test("Initial values are correct", () => {
  const { getByTestId, unmount } = render(
    <CostSelector
      costFilterSelections={{ wood: false, food: false, gold: false }}
      costAmounts={{ "wood-cost": null, "food-cost": null, "gold-cost": null }}
    />,
  );
  const checkboxWood = getByTestId("checkbox-wood");
  const checkboxFood = getByTestId("checkbox-food");
  const checkboxGold = getByTestId("checkbox-gold");
  const sliderWood = getByTestId("slider-wood");
  const sliderFood = getByTestId("slider-food");
  const sliderGold = getByTestId("slider-gold");

  expect(checkboxWood.value).toBeFalsy();
  expect(checkboxFood.value).toBeFalsy();
  expect(checkboxGold.value).toBeFalsy();

  expect(sliderWood.value).toBe("0");
  expect(sliderFood.value).toBe("0");
  expect(sliderGold.value).toBe("0");
  unmount();
});

test("do sliders work", () => {
  let costAmounts = {
    "wood-cost": null,
    "food-cost": null,
    "gold-cost": null,
  };
  let costFilterSelections = {
    wood: false,
    food: false,
    gold: false,
  };
  const setCostAmounts = jest.fn((arg) => (costAmounts = arg));
  const setCostFilterSelections = jest.fn((arg) => (costFilterSelections = arg));

  const handleCostAmounts = (newValue, name) => {
    setCostAmounts({ ...costAmounts, [name]: newValue });
  };
  const handleCostFilterSelections = (event) => {
    if (!event.target.checked) {
      // reset value at disabled slider
      handleCostAmounts(null, `${event.target.name}-cost`);
    } else {
      // set value of checked filter to 0 at initialization
      handleCostAmounts(0, `${event.target.name}-cost`);
    }
    setCostFilterSelections({
      ...costFilterSelections,
      [event.target.name]: event.target.checked,
    });
  };

  const { getByTestId, unmount, rerender } = render(
    <CostSelector
      costFilterSelections={costFilterSelections}
      costAmounts={costAmounts}
      handleCostFilterSelections={handleCostFilterSelections}
      handleCostAmounts={handleCostAmounts}
    />,
  );

  const checkboxWood = getByTestId("checkbox-wood");
  const checkboxFood = getByTestId("checkbox-food");
  const checkboxGold = getByTestId("checkbox-gold");
  const sliderWood = getByTestId("slider-wood");
  const sliderFood = getByTestId("slider-food");
  const sliderGold = getByTestId("slider-gold");
  const sliderValueWood = getByTestId("slider-value-wood");
  const sliderValueFood = getByTestId("slider-value-food");
  const sliderValueGold = getByTestId("slider-value-gold");

  expect(checkboxWood).toBeInTheDocument();
  expect(checkboxFood).toBeInTheDocument();
  expect(checkboxGold).toBeInTheDocument();
  expect(sliderWood).toBeInTheDocument();
  expect(sliderFood).toBeInTheDocument();
  expect(sliderGold).toBeInTheDocument();

  // check checkboxes to open sliders
  fireEvent.change(checkboxWood, { target: { checked: true } });
  fireEvent.change(checkboxFood, { target: { checked: true } });
  fireEvent.change(checkboxGold, { target: { checked: true } });

  expect(checkboxWood).toHaveProperty("checked", true);
  expect(checkboxFood).toHaveProperty("checked", true);
  expect(checkboxGold).toHaveProperty("checked", true);

  fireEvent.change(sliderWood, { target: { value: 10 } });
  fireEvent.change(sliderFood, { target: { value: 10 } });
  fireEvent.change(sliderGold, { target: { value: 10 } });

  expect(costAmounts["wood-cost"]).toBe("10");
  expect(costAmounts["food-cost"]).toBe("10");
  expect(costAmounts["gold-cost"]).toBe("10");

  rerender(
    <CostSelector
      costFilterSelections={costFilterSelections}
      costAmounts={costAmounts}
      handleCostFilterSelections={handleCostFilterSelections}
      handleCostAmounts={handleCostAmounts}
    />,
  );

  expect(sliderValueWood.textContent).toBe("10");
  expect(sliderValueFood.textContent).toBe("10");
  expect(sliderValueGold.textContent).toBe("10");
  unmount();
});
