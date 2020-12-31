import { ActionReducerMapBuilder, createReducer } from "@reduxjs/toolkit";
import { RootState } from "../../types";
import { endStroke, redo, undo } from "./actions";

export const initialState: RootState["historyIndex"] = 0;

/**
 * This file was create only to learn how create a reducer in redux-toolkit
 * with the utility createReducer() in this application we will use slices
 */
export const reducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<number>) => {
    builder.addCase(undo, (state, action) => {
      return Math.min(state + 1, action.payload);
    });
    builder.addCase(redo, (state, action) => {
      return Math.max(state - 1, 0);
    });
    builder.addCase(endStroke, (state, action) => {
      return 0;
    });
  }
);
