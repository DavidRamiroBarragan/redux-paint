import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { endStroke } from "./actions";

export const historyIndex = createSlice({
  name: "historyIndex",
  initialState: 0,
  reducers: {
    undo: (state, action: PayloadAction<number>) =>
      Math.min(state + 1, action.payload),
    redo: (state) => Math.max(state - 1, 0),
  },
  extraReducers: (builder: ActionReducerMapBuilder<number>) => {
    builder.addCase(endStroke, () => {
      return 0;
    });
  },
});

export default historyIndex.reducer;
export const { undo, redo } = historyIndex.actions;
