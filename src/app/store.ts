import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slices/ThemeSlice";
import { gameReducer } from "../features/game/slices/GameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
