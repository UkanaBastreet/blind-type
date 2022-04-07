import { engKeyboardArr } from "../Helpers/utils/utils"

const SET_KEYS = 'SET_KEYS'
const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const START = 'START'
const PAUSE = 'PAUSE'
const UNPAUSE = 'UNPAUSE'
const END = 'END'
const RESET = 'RESET'

export const initialState = {
  keys: engKeyboardArr,
  count: 0,
  value: '    Press "Space" to start    ',
  isModal: false,
  isStarted: false,
  isError: false,
  isTimer: false,
  errors: 0,
  time: 0,
  pauseTime: 0,
  startTime: 0,
  stopTime: 0,
  startPause: 0,
  stopPause: 0,
  keyIndex: 15,
  accuracy: 0,
}

export function reducer(state, action) {
  switch (action.type) {
    case SET_KEYS:
      return {
        ...state,
        keys: action.newKeys
      }
    case SWITCH_LANGUAGE:
      return {
        ...state
      }
    case INCREMENT_COUNT:
    case START:
      return {
        ...state,

      }
    case PAUSE:
      return {
        ...state,

      }
    case UNPAUSE:
      return {
        ...state,

      }
    case END:
      return {
        ...state,

      }
    case RESET:
      return {
        ...state,

      }
    default:
      return {
        ...state
      }
  }
}


export const setKeys_AC = (newKeys) => ({
  type: SET_KEYS,
  newKeys
})
export const start_AC = () => ({
  type: START,
})
export const pause_AC = () => ({
  type: PAUSE,
})
export const unpause_AC = () => ({
  type: UNPAUSE,
})
export const stop_AC = () => ({
  type: END,
})
export const restart_AC = () => ({
  type: RESET,
}) 
