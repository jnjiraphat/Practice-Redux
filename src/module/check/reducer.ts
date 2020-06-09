import { actionTypes } from "./types";

export interface ICheckState {
  textNum: string;
}

const initialState: ICheckState = {
  textNum: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECK_NUM_SUCCESS:
      return {
        textNum: action.payload.textNum,
      } as ICheckState;
    default:
      return state;
  }
};
