import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState = {
  mode: "light"
}
const THEME = createAction("THEME")
export const themeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(THEME, (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    })
})