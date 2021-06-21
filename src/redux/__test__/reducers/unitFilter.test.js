import "@testing-library/jest-dom/extend-expect";
import * as actionTypes from "../../../redux/actions/action-types";
import unitFilterReducer from "../../reducers/unitFilter";

test("Unit filter reducer works correctly", () => {
  const actions = [
    {
      type: actionTypes.FILTER_UNIT_DATA_INPROGRESS,
    },
    { type: actionTypes.FILTER_UNIT_DATA_SUCCESS, payload: true },
  ];
  const initialState = {
    filteredUnitData: null,
    filterUnitDataInProgress: false,
  };

  expect(unitFilterReducer(initialState, actions[0])).toEqual({
    filteredUnitData: null,
    filterUnitDataInProgress: true,
  });

  expect(unitFilterReducer(initialState, actions[1])).toEqual({
    filteredUnitData: actions[1].payload,
    filterUnitDataInProgress: false,
  });
});
