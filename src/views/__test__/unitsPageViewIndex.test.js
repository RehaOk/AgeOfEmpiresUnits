import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UnitDetailPageViewIndex from "../unitsPageView";
import store from "../../redux/store";

jest.mock("@material-ui/core/Slider", () => (props) => {
  return (
    <input
      type="range"
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

jest.mock("@material-ui/core/Checkbox", () => (props) => {
  return (
    <input
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
      name={props.name}
      color={props["color"]}
      data-testid={props["data-testid"]}
    />
  );
});

describe("Units page view tests", () => {
  let getByTestId;
  let container;
  let unmount;
  beforeEach(() => {
    const {
      getByTestId: getItemWithTextId,
      container: componentContainer,
      unmount: unmountComponent,
    } = render(
      <Provider store={store}>
        <UnitDetailPageViewIndex />
      </Provider>,
    );
    getByTestId = getItemWithTextId;
    container = componentContainer;
    unmount = unmountComponent;
  });

  test("Correctly render components", () => {
    const unitPageViewındex = getByTestId("unit-page-view-index");
    expect(unitPageViewındex).toBeInTheDocument();
  });

  test("Filters should be on the page", () => {
    const checkboxWood = getByTestId("checkbox-wood");
    const checkboxFood = getByTestId("checkbox-food");
    const checkboxGold = getByTestId("checkbox-gold");
    const sliderWood = getByTestId("slider-wood");
    const sliderFood = getByTestId("slider-food");
    const sliderGold = getByTestId("slider-gold");

    expect(checkboxWood).toBeInTheDocument();
    expect(checkboxFood).toBeInTheDocument();
    expect(checkboxGold).toBeInTheDocument();
    expect(sliderWood).toBeInTheDocument();
    expect(sliderFood).toBeInTheDocument();
    expect(sliderGold).toBeInTheDocument();
  });

  const actAsync = (callback) => {
    setTimeout(() => {
      callback();
    }, 10000);
  };

  test("Cost filter should change the table", () => {
    const checkboxWood = getByTestId("checkbox-wood");
    const checkboxFood = getByTestId("checkbox-food");
    const checkboxGold = getByTestId("checkbox-gold");
    const sliderWood = getByTestId("slider-wood");
    const sliderFood = getByTestId("slider-food");
    const sliderGold = getByTestId("slider-gold");
    const sliderValueWood = getByTestId("slider-value-wood");
    const sliderValueFood = getByTestId("slider-value-food");
    const sliderValueGold = getByTestId("slider-value-gold");

    fireEvent.change(checkboxWood, { target: { checked: true } });
    fireEvent.change(checkboxFood, { target: { checked: true } });
    fireEvent.change(checkboxGold, { target: { checked: true } });

    fireEvent.change(sliderWood, { target: { value: 70 } });
    fireEvent.change(sliderFood, { target: { value: 30 } });
    fireEvent.change(sliderGold, { target: { value: 30 } });

    expect(sliderValueWood.textContent).toBe("70");
    expect(sliderValueFood.textContent).toBe("30");
    expect(sliderValueGold.textContent).toBe("30");

    const tdZero = container.getElementsByTagName("td")[0];
    const tdOne = container.getElementsByTagName("td")[1];

    actAsync(() => {
      expect(tdZero.textContent).toBe("Skirmisher");
    });
    actAsync(() => {
      expect(tdOne.textContent).toBe("Elite Skirmisher");
    });
    /* Restore filters to initial values for other tests */
    fireEvent.change(checkboxWood, { target: { checked: false } });
    fireEvent.change(checkboxFood, { target: { checked: false } });
    fireEvent.change(checkboxGold, { target: { checked: false } });

    fireEvent.change(sliderWood, { target: { value: null } });
    fireEvent.change(sliderFood, { target: { value: null } });
    fireEvent.change(sliderGold, { target: { value: null } });
  }, 15000);

  test("Expect handleCostFilterSelections function to set session variables", () => {
    let mockFridge = {};
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockFridge[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn((key) =>
      mockFridge.hasOwnProperty(mockFridge[key]) ? mockFridge[key] : null,
    );

    const checkboxWood = getByTestId("checkbox-wood");
    const checkboxFood = getByTestId("checkbox-food");
    const checkboxGold = getByTestId("checkbox-gold");
    const sliderValueWood = getByTestId("slider-value-wood");
    const sliderValueFood = getByTestId("slider-value-food");
    const sliderValueGold = getByTestId("slider-value-gold");

    // Reset to 0 value if there is another value
    fireEvent.click(checkboxWood);
    fireEvent.click(checkboxFood);
    fireEvent.click(checkboxGold);
    fireEvent.click(checkboxWood);
    fireEvent.click(checkboxFood);
    fireEvent.click(checkboxGold);

    actAsync(() => expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(6));

    actAsync(() => expect(sliderValueWood.textContent).toBe("0"));
    actAsync(() => expect(sliderValueFood.textContent).toBe("0"));
    actAsync(() => expect(sliderValueGold.textContent).toBe("0"));

    global.Storage.prototype.setItem.mockReset();
    global.Storage.prototype.getItem.mockReset();
  });

  test("Toggles should work and update session storage", () => {
    let mockFridge = {};
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockFridge[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn((key) =>
      mockFridge.hasOwnProperty(mockFridge[key]) ? mockFridge[key] : null,
    );

    const toggleDark = getByTestId("toggle-dark");

    fireEvent.click(toggleDark);
    actAsync(() => expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1));

    global.Storage.prototype.setItem.mockReset();
    global.Storage.prototype.getItem.mockReset();
  });

  afterEach(() => {
    unmount();
  });
}, 15000);
