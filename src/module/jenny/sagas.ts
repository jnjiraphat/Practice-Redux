import { put, takeLeading } from "redux-saga";

import { ActionType } from "./types";
import { actionTypes } from "./types";
import { checkNum, checkNumSuccess, checkNumFailure } from "./actions";

function* checkNumTask(actions?: ActionType<typeof checkNum>) {
  const { value } = actions?.payload;
  try {
    if (value < 50) {
      const textNum = "under 50";
      yield put(checkNumSuccess(textNum));
    } else if (value === 50) {
      const textNum = "equal 50";
      yield put(checkNumSuccess(textNum));
    } else if (value > 50) {
      const textNum = "upper 50";
      yield put(checkNumSuccess(textNum));
    }
  } catch (error) {
    yield put(checkNumFailure);
  }
}

export default [takeLeading(actionTypes.CHECK_NUM, checkNumTask)];
