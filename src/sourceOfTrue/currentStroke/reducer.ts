import { ActionReducerMapBuilder, createReducer } from "@reduxjs/toolkit";
import { RootState, Stroke } from "../../types";
import {
  beginStroke,
  endStroke,
  setStrokeColor,
  updateStroke,
} from "./actions";

const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000",
};

/**
 * This file was create only to learn how create a reducer in redux-toolkit
 * with the utility createReducer() in this application we will use slices
 */
export const reducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<Stroke>) => {
    builder.addCase(beginStroke, (state, action) => {
      state.points.push(action.payload);
    });
    builder.addCase(updateStroke, (state, action) => {
      state.points.push(action.payload);
    });
    builder.addCase(setStrokeColor, (state, action) => {
      state.color = action.payload;
    });
    builder.addCase(endStroke, (state, action) => {
      state.points = [];
    });
  }
);
