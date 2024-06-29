import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  //Add other slices here
});

export default rootReducer;
