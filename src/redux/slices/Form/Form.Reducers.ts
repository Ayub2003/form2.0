import { IAddress, IForm } from "./Form.Model";
import { PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
  setForm(state: IForm<IAddress>, action: PayloadAction<IForm<IAddress>>) {
    state = action.payload;
    state.age = Number(action.payload.age);
    state.age2 = Number(action.payload.age2);
    console.log("redux from state", state);
  },
};
