import { actionTypes } from "./types";

export const checkNum = (value: number) => ({
  type: actionTypes.CHECK_NUM,
  payload: {
    value,
  },
});

export const checkNumSuccess = (textNum: string) => ({
  type: actionTypes.CHECK_NUM_SUCCESS,
  payload: {
    textNum,
  },
});

export const checkNumFailure = (error) => ({
  type: actionTypes.CHECK_NUM_FAILURE,
  error,
});
