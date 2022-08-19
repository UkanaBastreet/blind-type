export const PUSH_NEW_GAME = "PUSH_NEW_GAME";

export const pushNewGame_AC = (game) => {
  return {
    type: PUSH_NEW_GAME,
    payload: game,
  };
};
