export const SET_KEYS = "SET_KEYS";
export const SET_COUNT = "SET_COUNT";
export const START = "START";
export const SET_VALUE = "SET_VALUE";
export const SET_IS_STARTED = "SET_IS_STARTED";

export const setKeys_AC = (keys) => {
  return {
    type: SET_KEYS,
    keys,
  };
};
export const setCount_AC = () => {
  return {
    type: SET_COUNT,
  };
};
export const start_AC = () => {
  return {
    type: START,
  };
};
export const setValue_AC = (value) => {
  return {
    type: SET_VALUE,
    value,
  };
};
export const setIsStarted_AC = () => {
  return {
    type: SET_IS_STARTED,
  };
};
