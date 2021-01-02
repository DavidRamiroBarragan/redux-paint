import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../../types";

const initialState: ModalState = {
  isShown: true,
  modalName: null,
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.isShown = true;
      state.modalName = action.payload;
    },
    hide: (state) => {
      state.isShown = true;
      state.modalName = null;
    },
  },
});

export const modalVisible = slice.reducer;

export const { show, hide } = slice.actions;
