import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: ThemeType;
}
const initialState: ThemeState = {
  theme: "vscode",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const themeReducer = ThemeSlice.reducer;

export const { changeTheme } = ThemeSlice.actions;

type ThemeType = "vscode" | "dino";
