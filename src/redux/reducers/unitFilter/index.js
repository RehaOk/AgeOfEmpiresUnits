import * as actionTypes from "../../actions/action-types";

const initialState = {
  filteredUnitData: null,
  filterUnitDataInProgress: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILTER_UNIT_DATA_INPROGRESS: {
      return {
        ...state,
        filteredUnitData: null,
        filterUnitDataInProgress: true,
      };
    }
    case actionTypes.FILTER_UNIT_DATA_SUCCESS: {
      return {
        ...state,
        filteredUnitData: action.payload,
        filterUnitDataInProgress: false,
      };
    }
    default: {
      return { ...state };
    }
  }
}
