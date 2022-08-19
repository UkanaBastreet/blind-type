import { incrementCount_AC, start_AC } from "../Redux/actions"
import { values } from "./constants"
import { isCyrillic } from "./functions"

const prevDefArr = ["Tab", "Alt", " ", "ContextMenu", "Escape"]

export function downHandler(
  event,
  setKeys,
  currentChar,
  setIndex,
  charHandler,
  errorHandler
) {
  setKeys((keys) => {
    if (!keys.hasOwnProperty(event.code)) return { ...keys }
    if (prevDefArr.includes(event.key)) event.preventDefault()
    isCyrillic(event.key) &&
      alert(`Switch yor keyboard language \n Press "Space" to return `)
    //
    if (currentChar !== currentChar.toLowerCase() && event.key === "Shift") {
      keys[event.code].bluelight()
    }
    if (event.key === currentChar) {
      keys[event.code].bluelight()
      charHandler(currentChar)
      setIndex((i) => i + 1)
    } else {
      keys[event.code].redlight()
      event.code !== "Shift" && errorHandler(event.key, currentChar)
    }
    return { ...keys }
  })  
}
export function upHandler(event, setKeys) {
  setKeys((keys) => {
    if (!keys.hasOwnProperty(event.code)) return keys
    keys[event.code].redOff()
    keys[event.code].blueOff()
    return { ...keys }
  })
}
export function rightKeyHandler(keys, setKeys, currentChar = "g") {
  Object.values(keys).forEach((key) => key.grayOff())
  Object.values(keys).forEach((key) => {
    if (key.name === currentChar.toLowerCase()) {
      key.graylight()
      if (currentChar !== currentChar.toLowerCase()) {
        key.shiftSide && keys[key.shiftSide].graylight()
      }
    }
  })
  setKeys({ ...keys })
}
export function blurHandler(setKeys) {
  setKeys((keys) => {
    for (const key in keys) {
      if (Object.hasOwnProperty.call(keys, key)) {
        keys[key].blueOff()
        keys[key].redOff()
      }
    }
    return { ...keys }
  })
}
