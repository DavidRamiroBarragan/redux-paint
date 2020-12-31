import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import historyIndex from "./historyIndex/slice";
import currentStroke from "./currentStroke/slice";
import strokes from "./strokes/slice";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    strokes,
  },
  middleware,
});
