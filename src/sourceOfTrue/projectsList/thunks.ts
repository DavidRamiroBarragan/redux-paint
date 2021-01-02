import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { fetchProjectList } from "../../api/projectsList/api";
import { Project, RootState } from "../../types";
import { AppThunk } from "../store";
import { getProjectsLisSuccess, getProjectsListFailed } from "./slice";

export const getProjectsList = (): AppThunk => async (
  dispatch: ThunkDispatch<RootState, unknown, Action<string>>
) => {
  try {
    const projectList: Project[] = await fetchProjectList();
    dispatch(getProjectsLisSuccess(projectList));
  } catch (error) {
    dispatch(getProjectsListFailed(error.toString()));
  }
};
