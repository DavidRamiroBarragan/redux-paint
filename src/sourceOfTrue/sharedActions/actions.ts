import { createAction } from "@reduxjs/toolkit";
import { END_STROKE } from "../../constants/actions";
import { Stroke } from "../../types";

export const endStroke = createAction<{
  stroke: Stroke;
  historyIndex: number;
}>(END_STROKE);
