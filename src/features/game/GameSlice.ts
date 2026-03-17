import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  GameModeType,
  GameResultType,
  GameStatusType,
  InputChar,
  inputError,
  TimeLimitType,
  WordCountType,
} from "./types/game.type";
import { getText } from "@features/game/utils/getText";

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
  input: InputChar[];
}

const localGameState = localStorage.getItem("gameState");

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
  input: [],
};

const GameSlice = createSlice({
  name: "game",
  initialState: localGameState
    ? JSON.parse(localGameState) as GameState
    : initialState,
  reducers: {
    keyPressed: (state, action: PayloadAction<string>) => {
      const key = action.payload;

      if (state.status === "pending") {
        state.status = "running";
        state.startTime = Date.now();
        state.input = [];
        state.errors = [];
        state.lastGameResults = null;
      }

      if (state.status !== "running" || state.index >= state.text.length)
        return;

      const char = state.text[state.index];

      if (char === key) {
        state.index++;
        state.input.push({
          char,
          index: state.index - 1,
          time: Date.now(),
        });
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
          totalErrors: state.errors.length,
          mode: state.mode,
          text: state.text,
          time: duration,
          wpm: Math.round((state.text.split(" ").length / duration) * 60),
          input: state.input,
          length: state.text.length,
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
      state.input = [];
      localStorage.setItem("gameState", JSON.stringify(state));
    },
    repeat: (state) => {
      state.index = 0;
      state.errors = [];
      // state.results = null;
      state.startTime = null;
      state.status = "pending";
      // state.text = getText(state.mode, state.wordsCount, state.timeLimit);
      state.input = [];
      localStorage.setItem("gameState", JSON.stringify(state));
    },
    next: (state) => {
      state.index = 0;
      state.errors = [];
      // state.results = null;
      state.startTime = null;
      state.status = "pending";
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
      state.input = [];
      localStorage.setItem("gameState", JSON.stringify(state));
    },
    changeMode: (state, action: PayloadAction<GameModeType>) => {
      state.mode = action.payload;
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
      state.index = 0;
      state.errors = [];
      state.results = null;
      state.startTime = null;
      state.status = "pending";
      state.input = [];
      localStorage.setItem("gameState", JSON.stringify(state));
    },
    changeWordsCount(state, action: PayloadAction<WordCountType>) {
      state.wordsCount = action.payload;
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
      state.index = 0;
      state.errors = [];
      state.results = null;
      state.startTime = null;
      state.status = "pending";
      state.input = [];
      localStorage.setItem("gameState", JSON.stringify(state));
    },
    changeTimeLimit(state, action: PayloadAction<TimeLimitType>) {
      state.timeLimit = action.payload;
      state.text = getText(state.mode, state.wordsCount, state.timeLimit);
      state.index = 0;
      state.errors = [];
      state.results = null;
      state.startTime = null;
      state.status = "pending";
      state.input = [];
      localStorage.setItem("gameState", JSON.stringify(state));
    },
  },
  extraReducers() {},
});

export const gameReducer = GameSlice.reducer;

export const {
  restart,
  repeat,
  next,
  changeMode,
  changeWordsCount,
  changeTimeLimit,
  keyPressed,
} = GameSlice.actions;
