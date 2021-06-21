import * as actionTypes from "./action-types";

/* ACTIONS */

export const filterUnitData = (payload) => {
  return {
    type: actionTypes.FILTER_UNIT_DATA,
    payload,
  };
};
export const filterUnitDataInprogress = () => {
  return {
    type: actionTypes.FILTER_UNIT_DATA_INPROGRESS,
  };
};
export const filterUnitDataSuccess = (payload) => {
  return {
    type: actionTypes.FILTER_UNIT_DATA_SUCCESS,
    payload,
  };
};
