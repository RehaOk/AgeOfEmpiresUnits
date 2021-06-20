import { all } from "redux-saga/effects";
import { filterUnitActionWatcher } from "./unitFilter";

export default function* filterSaga() {
  yield all([filterUnitActionWatcher()]);
}
