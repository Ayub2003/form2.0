import { createSlice } from "@reduxjs/toolkit";
import { formInitState } from "./Form.Init";
import { reducers } from "./Form.Reducers";

const formSlice = createSlice({
  name: "form",
  initialState: formInitState,
  reducers: reducers,
});

export const { setForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
