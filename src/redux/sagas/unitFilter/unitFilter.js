import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../../actions/action-types";
import * as actions from "../../actions";
import getUnits from "../../../db";

export function* filterUnitActionWatcher() {
  yield takeLatest(actionTypes.FILTER_UNIT_DATA, filterUnitData);
}

export function unitFilterer(action, unit) {
  if (unit.cost === null) {
    // There are items with unit cost null
    return false;
  }
  let trueCount = 0;
  let reqiuredTrueConstraintCount = Object.keys(unit.cost).length;
  if (unit.age === action.payload.age || action.payload.age === "all") {
    if (unit.cost.hasOwnProperty("Food")) {
      if (action.payload.costAmounts["food-cost"] === null) {
        // do not evaluate this cost it is unchecked
        trueCount++;
      } else if (unit.cost.Food <= action.payload.costAmounts["food-cost"]) {
        trueCount++;
      } else {
        return false;
      }
    }
    if (unit.cost.hasOwnProperty("Wood")) {
      if (action.payload.costAmounts["wood-cost"] === null) {
        // do not evaluate this cost it is unchecked
        trueCount++;
      } else if (unit.cost.Wood <= action.payload.costAmounts["wood-cost"]) {
        trueCount++;
      } else {
        return false;
      }
    }
    if (unit.cost.hasOwnProperty("Gold")) {
      if (action.payload.costAmounts["gold-cost"] === null) {
        // do not evaluate this cost it is unchecked
        trueCount++;
      } else if (unit.cost.Gold <= action.payload.costAmounts["gold-cost"]) {
        trueCount++;
      } else {
        return false;
      }
    }
    if (reqiuredTrueConstraintCount === trueCount) {
      return true;
    }
  } else {
    return false;
  }
}

export function* filterUnitData(action) {
  yield put(actions.filterUnitDataInprogress());
  /* Filtering Here */
  const unitsJSON = yield call(getUnits);
  const filteredUnits = unitsJSON.units.filter((unit) => {
    return unitFilterer(action, unit);
  });

  yield put(actions.filterUnitDataSuccess(filteredUnits));
}
