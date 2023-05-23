import { combineReducers } from "@reduxjs/toolkit";
import { cityDataReducer } from "./reducers";
export const rootReducer = combineReducers({
  cityDataReducer: cityDataReducer,
});
