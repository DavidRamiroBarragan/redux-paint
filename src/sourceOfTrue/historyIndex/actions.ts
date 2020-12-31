import { Stroke } from "../../types";

export const UNDO = "UNDO";
export const REDO = "REDO";
export const END_STROKE = "END_STROKE";

export type HistoryIndexAction =
  | {
      type: typeof UNDO;
      payload: number;
    }
  | {
      type: typeof REDO;
    }
  | {
      type: typeof END_STROKE;
      payload: { stroke: Stroke; historyLimit: number };
    };

export const undo = (undoLimit: number) => ({ type: UNDO, payload: undoLimit });
export const redo = () => ({ type: REDO });
export const endStroke = (stroke: Stroke, historyLimit: number) => ({
  stroke,
  historyLimit,
});
