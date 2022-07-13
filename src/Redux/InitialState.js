import { engKeys } from "../utils/constants";

export const initialState = {
  keys: engKeys,
  value: 'Press "Space" to start',
  count: 0,
  currentLetter: " ",
  isStarted: false,
};

const testState = {
  keys: [],
  value: "",
  valueindex: 0,
  isStarted: false,
  isPaused: false,

  errors: [],
  games: [],
};
