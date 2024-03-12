import { lessons, values } from "./constants"

export function getValue() {
  return values.value
}

export function isCyrillic(text) {
  return /[а-я]/i.test(text)
}
export function removeEventHandlers() {
  window.onkeydown = null
  window.onkeyup = null
  window.onblur = null
}
export function getTime(duration) {
  let ms = Math.floor(duration % 100)
  let seconds = Math.floor((duration / 100) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)

  ms = ms < 10 ? "0" + ms : ms
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  return minutes + ":" + seconds + "," + ms
}
window.getTime = getTime

export function createValue(charArr = "fdjk", count = 50, err) {
  let value = []
  for (let i = 0; i < count; i++) {
    value.push(charArr[Math.floor(Math.random() * charArr.length)])
  }
  for (let i = 1; i < count / 5; i++) {
    value[i * 5] = " "
  }
  return value.splice(1, value.length).join("")
}
export function receiveValue(type, lang, id) {
  if (type.split(" ").length === 1) {
    console.log(lessons[lang].find((l) => l.id === id))
    let arr = lessons[lang].find((l) => +l.id === +id).value
    return shuffle(arr.split(" ")).join(" ")
  } else {
    return createValue(type.split(" ").join(""))
  }
}
export function debounce(func, wait, immediate = true) {
  let timeout = false

  return function () {
    let context = this
    let args = arguments
    let callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }, wait)
    if (callNow) func.apply(context, args)
  }
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  // While there remain elements to shuffle.
  while (+currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
} 