import "@testing-library/jest-dom/extend-expect";
import * as actionTypes from "../../actions/action-types";
import { filterUnitData, filterUnitDataInprogress, filterUnitDataSuccess } from "../../actions";

test("Expect actions to return correct values", async () => {
  expect(filterUnitData("age")).toEqual({
    type: actionTypes.FILTER_UNIT_DATA,
    payload: "age",
  });

  expect(filterUnitDataInprogress()).toEqual({
    type: actionTypes.FILTER_UNIT_DATA_INPROGRESS,
  });

  expect(filterUnitDataSuccess(true)).toEqual({
    type: actionTypes.FILTER_UNIT_DATA_SUCCESS,
    payload: true,
  });
});
