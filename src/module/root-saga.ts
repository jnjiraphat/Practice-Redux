import { all } from "redux-saga/effects";

import checkSagaModule from "./check/sagas";

export function* rootSaga() {
  yield all([...checkSagaModule]);
}
