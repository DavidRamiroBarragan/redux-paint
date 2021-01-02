import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import historyIndex from "./historyIndex/slice";
import currentStroke from "./currentStroke/slice";
import projectsList from "./projectsList/slice";
import { modalVisible } from "./modals/slice";
import strokes from "./strokes/slice";
import logger from "redux-logger";
import { RootState } from "../types";

const middleware = [...getDefaultMiddleware(), logger];

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    historyIndex,
    currentStroke,
    modalVisible,
    strokes,
    projectsList,
  },
  middleware,
});
