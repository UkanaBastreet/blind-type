import { PUSH_NEW_GAME } from "./actions";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case PUSH_NEW_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    default:
      break;
  }
};
