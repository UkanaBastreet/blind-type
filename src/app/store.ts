import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "src/features/game/slices/GameSlice";

export const store = configureStore({
  reducer: {
    game: GameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
