import { createAction } from "@reduxjs/toolkit";
import {
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
  UPDATE_STROKE,
} from "../../constants/actions";
import { Point, Stroke } from "../../types";

/**
 * This file was create only to learn how create a reducer in redux-toolkit
 * with the utility createAction() in this application we will use slices
 */

export const beginStroke = createAction<Point>(BEGIN_STROKE);

export const updateStroke = createAction<Point>(UPDATE_STROKE);

export const setStrokeColor = createAction<string>(SET_STROKE_COLOR);

export const endStroke = createAction<{ stroke: Stroke; historyIndex: number }>(
  END_STROKE
);
