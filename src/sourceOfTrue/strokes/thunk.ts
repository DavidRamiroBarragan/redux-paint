import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { getProject, newProject } from "../../api/strokes/api";
import { RootState } from "../../types";
import { AppThunk } from "../store";
import { setStrokes } from "./slice";

export const saveProject = (
  projectName: string,
  thumbnail: string
): AppThunk => async (
  dispatch: ThunkDispatch<RootState, unknown, Action<string>>,
  getState: () => RootState
) => {
  try {
    const response = await newProject(
      projectName,
      getState().strokes,
      thumbnail
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const loadProject = (projectId: string): AppThunk => async (
  dispatch: ThunkDispatch<RootState, unknown, Action<string>>
) => {
  try {
    const { project } = await getProject(projectId);
    dispatch(setStrokes(project.strokes));
  } catch (error) {}
};
