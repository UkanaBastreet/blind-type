import { SET_COUNT, SET_IS_STARTED, SET_KEYS, START } from "./actions";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_KEYS:
      return {
        ...state,
        keys: action.keys,
      };
    case SET_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_IS_STARTED:
      return {
        ...state,
      };
    case START:
      return {
        ...state,
        isStarted: !state.isStarted,
      };
    default:
      break;
  }
};
