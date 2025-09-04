import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slices/ThemeSlice";
import { authReducer } from "@features/auth/Auth.slice";
import { gameReducer } from "@features/game/GameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    theme: themeReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
