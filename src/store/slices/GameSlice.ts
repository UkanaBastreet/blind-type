import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GameResultType,
  GameStatusType,
  GameModeType,
  WordCountType,
  TimeLimitType,
  inputError,
} from "src/types/game.type";
import { getText } from "src/utils/getText";
import { RootState } from "../store";

interface GameState {
  index: number;
  text: string;
  errors: inputError[];
  results: GameResultType | null;
  mode: GameModeType;
  wordsCount: WordCountType;
  timeLimit: TimeLimitType;
  status: GameStatusType;
  lastGameResults: GameResultType | null;
  startTime: number | null;
}

const initialState: GameState = {
  index: 0,
  text: getText("time", 25, 15),
  errors: [],
  status: "pending",
  mode: "time",
  wordsCount: 25,
  timeLimit: 15,
  results: null,
  lastGameResults: null,
  startTime: null,
};

export const GameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    keyPressed: (state, action: PayloadAction<string>) => {
      const key = action.payload;

      if (state.status === "pending") {
        state.status = "running";
        state.startTime = Date.now();
      }

      if (state.status !== "running" || state.index >= state.text.length)
        return;

      const char = state.text[state.index];

      if (char === key) {
        state.index++;
      } else {
        state.errors.push({ char, index: state.index, input: key });
      }

      if (state.index >= state.text.length) {
        const endTime = Date.now();
        const duration = Math.floor((endTime - state.startTime!) / 1000);
        const correctChars = state.index - state.errors.length;

        state.results = {
          acc: Math.round((correctChars / state.index) * 100),
          date: state.startTime!,
          errors: state.errors,
          totalError: state.errors.length,
          mode: state.mode,
          text: state.text,
          time: duration,
          wpm: Math.round((state.text.split(" ").length / duration) * 60),
        };
        state.lastGameResults = state.results;
        state.status = "finished";
      }
    },
    restart: (state) => {
      state.index = 0;
      state.errors = [];
      state.results = null;
      state.startTime = null;
      state.status = "pending";
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
    },
    next: (state) => {
      state.status = "pending";
    },
    changeMode: (state, action: PayloadAction<GameModeType>) => {
      state.mode = action.payload;
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
    },
    changeWordsCount(state, action: PayloadAction<WordCountType>) {
      state.wordsCount = action.payload;
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
    },
    changeTimeLimit(state, action: PayloadAction<TimeLimitType>) {
      state.timeLimit = action.payload;
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
    },
  },
  extraReducers(builder) {
      
  },
});

export default GameSlice.reducer;

export const {
  restart,
  next,
  changeMode,
  changeWordsCount,
  changeTimeLimit,
  keyPressed,
} = GameSlice.actions;

