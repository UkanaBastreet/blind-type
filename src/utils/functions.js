import { values } from "./constants";

export function getValue() {
  return values.value;
}

export function isCyrillic(text) {
  return /[а-я]/i.test(text)
}
export function removeEventHandlers() {
  window.onkeydown = null
  window.onkeyup = null
  window.onblur = null
}
