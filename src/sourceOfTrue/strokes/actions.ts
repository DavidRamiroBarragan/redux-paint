import { createAction } from "@reduxjs/toolkit";
import { END_STROKE } from "../../constants/actions";
import { Stroke } from "../../types";

/**
 * This file was create only to learn how create a reducer in redux-toolkit
 * with the utility createAction() in this application we will use slices
 */
export const endStroke = createAction<{ stroke: Stroke; historyIndex: number }>(
  END_STROKE
);
