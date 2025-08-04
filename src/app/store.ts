import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "src/features/game/slices/GameSlice";
import { themeReducer } from "./slices/ThemeSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
