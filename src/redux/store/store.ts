import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "../slices/Form/Form.Slice";

export const store = configureStore({ reducer: { form: formReducer } });
