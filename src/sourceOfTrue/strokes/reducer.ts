import { ActionReducerMapBuilder, createReducer } from "@reduxjs/toolkit";
import { RootState, Stroke } from "../../types";
import { endStroke } from "./actions";

const initialStateStrokes: RootState["strokes"] = [];
/**
 * This file was create only to learn how create a reducer in redux-toolkit
 * with the utility createReducer() in this application we will use slices
 */
export const reducer = createReducer(
  initialStateStrokes,
  (builder: ActionReducerMapBuilder<Stroke[]>) => {
    builder.addCase(endStroke, (state, action) => {
      const { historyIndex, stroke } = action.payload;
      if (historyIndex === 0) {
        state.push(stroke);
      } else {
        state.splice(-historyIndex, historyIndex, stroke);
      }
    });
  }
);
