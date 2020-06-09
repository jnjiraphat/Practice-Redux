import { combineReducers } from "redux";

import checkReducer from "./check/reducer";
import { MODULE_NAME as CHECK_MODULE } from "./check/types";

export const rootReducer = combineReducers({
  [CHECK_MODULE]: checkReducer,
});
