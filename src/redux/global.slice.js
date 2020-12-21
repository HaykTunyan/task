import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    form: null,
    formTwo: null,
  },
  reducers: {
    registerForm: (state, action) => {
      console.log("statesddsdfdsf", state, action);
      state.form = action.payload;
    },
    registerFormTwo: (state, action) => {
      state.formTwo = action.payload;
    },
  },
});

export const { registerForm, registerFormTwo } = globalSlice.actions;

export default globalSlice.reducer;
