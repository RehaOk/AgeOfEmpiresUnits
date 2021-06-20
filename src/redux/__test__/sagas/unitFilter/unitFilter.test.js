import sagaHelper from "redux-saga-testing";
import "@testing-library/jest-dom/extend-expect";
import units from "../../../../assets/units.json";
import {
  filterUnitData as filterUnitDataGenerator,
  unitFilterer,
} from "../../../sagas/unitFilter/unitFilter";
import * as actionTypes from "../../../actions/action-types";

describe("redux test", () => {
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

  iterator("should trigger inprogress action", (result) => {
    expect(result.payload.action.type).toBe(actionTypes.FILTER_UNIT_DATA_INPROGRESS);
  });

  iterator("mock api call", (call) => {
    return units;
  });

  units.units.filter((unit) => {
    if (unit.cost === null) {
      expect(
        unitFilterer(
          {
            payload: {
              age: "all",
              costAmounts: {
                "wood-cost": null,
                "food-cost": null,
                "gold-cost": null,
              },
            },
          },
          unit,
        ),
      ).toBeFalsy();
    } else {
      expect(
        unitFilterer(
          {
            payload: {
              age: "all",
              costAmounts: {
                "wood-cost": null,
                "food-cost": null,
                "gold-cost": null,
              },
            },
          },
          unit,
        ),
      ).toBeTruthy();
    }
  });

  units.units.filter((unit) => {
    if (unit.cost === null) {
      expect(
        unitFilterer(
          {
            payload: {
              age: "Dark",
              costAmounts: {
                "wood-cost": 100,
                "food-cost": 100,
                "gold-cost": 100,
              },
            },
          },
          unit,
        ).length,
      ).toBeFalsy();
    } else {
      expect(
        unitFilterer(
          {
            payload: {
              age: "Dark",
              costAmounts: {
                "wood-cost": 0,
                "food-cost": 0,
                "gold-cost": 0,
              },
            },
          },
          unit,
        ).length,
      ).toBeFalsy();
    }
  });

  iterator("should obtain final result correctly", (result) => {
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
