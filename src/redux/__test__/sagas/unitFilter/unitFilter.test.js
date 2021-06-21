import sagaHelper from "redux-saga-testing";
import "@testing-library/jest-dom/extend-expect";
import units from "../../../../assets/units.json";
import {
  filterUnitData as filterUnitDataGenerator,
  unitFilterer,
} from "../../../sagas/unitFilter/unitFilter";
import * as actionTypes from "../../../actions/action-types";

describe("Redux test", () => {
  const iterator = sagaHelper(
    filterUnitDataGenerator({
      payload: {
        age: "all",
        costAmounts: {
          "wood-cost": null,
          "food-cost": null,
          "gold-cost": null,
        },
      },
    }),
  );

  iterator("Should trigger inprogress action", (result) => {
    expect(result.payload.action.type).toBe(actionTypes.FILTER_UNIT_DATA_INPROGRESS);
  });

  iterator("Mock api call", (call) => {
    return units;
  });

  iterator("Should obtain final result correctly", (result) => {
    expect(result.payload.action.type).toBe(actionTypes.FILTER_UNIT_DATA_SUCCESS);
    expect(result.payload.action.payload.length).toBe(95);
    expect(result.payload.action.payload.length).toBe(95);
    expect(result.payload.action.payload).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          age: "Feudal",
        }),
        expect.objectContaining({
          age: "Dark",
        }),
        expect.objectContaining({
          age: "Imperial",
        }),
        expect.objectContaining({
          age: "Castle",
        }),
      ]),
    );
  });
});

describe("Test unit filterer when filter values are not null", () => {
  const iterator = sagaHelper(
    filterUnitDataGenerator({
      payload: {
        age: "all",
        costAmounts: {
          "wood-cost": null,
          "food-cost": null,
          "gold-cost": null,
        },
      },
    }),
  );

  iterator("Should trigger inprogress action", (result) => {
    expect(result.payload.action.type).toBe(actionTypes.FILTER_UNIT_DATA_INPROGRESS);
  });

  iterator("Mock api call", (call) => {
    return units;
  });

  const ages = ["all", "Dark", "Castle", "Imperial", "Feudal"];
  // There are some items with costs higher than 200
  const costAmountsForSuccess = [
    { "wood-cost": null, "food-cost": null, "gold-cost": null },
    { "wood-cost": 250, "food-cost": null, "gold-cost": null },
    { "wood-cost": null, "food-cost": 250, "gold-cost": null },
    { "wood-cost": null, "food-cost": null, "gold-cost": 250 },
    { "wood-cost": 250, "food-cost": 250, "gold-cost": null },
    { "wood-cost": null, "food-cost": 250, "gold-cost": 250 },
    { "wood-cost": 250, "food-cost": null, "gold-cost": 250 },
    { "wood-cost": 250, "food-cost": 250, "gold-cost": 250 },
  ];
  const costAmountsForFailure = [
    { "wood-cost": 1, "food-cost": 1, "gold-cost": 1 }, // filtering caused by all fields
  ];
  // Successfully return units with filter values at peak
  ages.forEach((age) => {
    costAmountsForSuccess.forEach((amountSet) => {
      units.units.filter((unit) => {
        if (unit.cost !== null && unit.age === age) {
          expect(
            unitFilterer(
              {
                payload: {
                  age: age,
                  costAmounts: amountSet,
                },
              },

              unit,
            ),
          ).toBeTruthy();
        }
      });
    });
  });

  // Return no units
  ages.forEach((age) => {
    costAmountsForFailure.forEach((amountSet) => {
      units.units.filter((unit) => {
        if (unit.cost !== null && unit.age === age) {
          expect(
            unitFilterer(
              {
                payload: {
                  age: age,
                  costAmounts: amountSet,
                },
              },

              unit,
            ),
          ).toBeFalsy();
        }
      });
    });
  });

  // Filters the ones with different age
  ages.forEach((age) => {
    costAmountsForFailure.forEach((amountSet) => {
      units.units.filter((unit) => {
        if (unit.cost !== null && unit.age !== age) {
          expect(
            unitFilterer(
              {
                payload: {
                  age: age,
                  costAmounts: amountSet,
                },
              },

              unit,
            ),
          ).toBeFalsy();
        }
      });
    });
  });

  iterator("Should obtain final result correctly", (result) => {
    expect(result.payload.action.type).toBe(actionTypes.FILTER_UNIT_DATA_SUCCESS);
    expect(result.payload.action.payload.length).toBe(95);
    expect(result.payload.action.payload.length).toBe(95);
    expect(result.payload.action.payload).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          age: "Feudal",
        }),
        expect.objectContaining({
          age: "Dark",
        }),
        expect.objectContaining({
          age: "Imperial",
        }),
        expect.objectContaining({
          age: "Castle",
        }),
      ]),
    );
  });
});
