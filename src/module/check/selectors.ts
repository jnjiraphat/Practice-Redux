import { MODULE_NAME } from "./types";
import { ICheckState } from "./reducer";

export const getRootCheckState = (state) => state[MODULE_NAME] as ICheckState;

export const getCheckState = (state) => state.textNum;
