
export const engKeysArr = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '`'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
]

export const engKeyboardArr = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'BracketLeft', 'BracketRight', 'Backslash',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Comma', 'Period', 'Slash', 'ShiftRight',
  'ControlLeft', 'Windows', 'AltLeft', 'Space', 'AltRight', 'FuncLock', 'Menu', 'ControlRight'
].map((key) => {
  let obj = {
    'Backslash': '\\',
    'Minus': '-',
    'Equal': '=',
    'BracketLeft': '[',
    'BracketRight': ']',
    'Semicolon': ';',
    'Quote': "'",
    'Comma': ',',
    'Period': '.',
    'Slash': '/',
    'Tab': 'Tab',
    'CapsLock': 'CapsLock',
    'Enter': 'Enter',
    'Backspace': 'Backspace',
    'Windows': 'Windows',
    'Menu': 'Menu',
    'Backquote': '`',
    'ShiftLeft': 'Shift',
    'ShiftRight': 'Shift',
    'ControlLeft': 'Control',
    'ControlRight': 'Control',
    'AltLeft': 'Alt',
    'AltRight': 'Alt',
    'FuncLock': 'Fn',
    'Space': ' ',
  }
  if (obj[key]) {
    return {
      id: 0,
      name: obj[key],
      code: key,
      classList: [key]
    }
  }
  if (key.indexOf('Digit') >= 0) {
    return {
      id: 1,
      name: key.slice(5, 6),
      code: key,
      classList: []
    }
  }
  if (key.length === 1) {
    return {
      id: 2,
      name: key,
      code: 'Key' + key.toLocaleUpperCase(),
      classList: []
    }
  }
})
export const rusKeyboardArr = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'BracketLeft', 'BracketRight', 'Backslash',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Comma', 'Period', 'Slash', 'ShiftRight',
  'ControlLeft', 'Windows', 'AltLeft', 'Space', 'AltRight', 'FuncLock', 'Menu', 'ControlRight'
].map((key) => {
  let obj = {
    'Backslash': '\\',
    'Minus': '-',
    'Equal': '=',
    'BracketLeft': '[',
    'BracketRight': ']',
    'Semicolon': ';',
    'Quote': "'",
    'Comma': ',',
    'Period': '.',
    'Slash': '/',
    'Tab': 'Tab',
    'CapsLock': 'CapsLock',
    'Enter': 'Enter',
    'Backspace': 'Backspace',
    'Windows': 'Windows',
    'Menu': 'Menu',
    'Backquote': '`',
    'ShiftLeft': 'Shift',
    'ShiftRight': 'Shift',
    'ControlLeft': 'Control',
    'ControlRight': 'Control',
    'AltLeft': 'Alt',
    'AltRight': 'Alt',
    'FuncLock': 'Fn',
    'Space': ' ',
  }
  if (obj[key]) {
    return {
      id: 0,
      name: obj[key],
      code: key,
      classList: [key]
    }
  }
  if (key.indexOf('Digit') >= 0) {
    return {
      id: 1,
      name: key.slice(5, 6),
      code: key,
      classList: []
    }
  }
  if (key.length === 1) {
    return {
      id: 2,
      name: key,
      code: 'Key' + key.toLocaleUpperCase(),
      classList: []
    }
  }
})

export const engKeys = `qwertyuiop[]asdfghjkl;'zxcvbnm,./ `.split('').map((key) => {
  return {
    name: key,
    classList: ['key']
  }
})
// export const engValue = '               Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptate perferendis repudiandae odio odit commodi mollitia temporibus voluptatum ex quas voluptatem.Officia accusamus dolor obcaecati iure esse expedita est ipsum doloribus.'.toLocaleLowerCase()
export const engValue = '               lorem'

export const lessonsArrays = {
  combineArray: [
    ['d', 'f', 'j', 'k'],
    ['a', 's', 'l', ';'],
    ['v', 'b', 'n', 'm'],
    ['t', 'g', 'y', 'h'],
    ['e', 'r', 'u', 'i'],
    ['q', 'w', 'o', 'p'],
    ['x', 'c', ',', '.'],
    ['z', '/', '[', ']', "'"],
  ],
  leftRowArray: [
    ['q', 'w', 'e', 'r', 't'],
    ['a', 's', 'd', 'f', 'g'],
    ['z', 'x', 'c', 'v', 'b']
  ],
  rightRowArray: [
    ['y', 'u', 'i', 'o', 'p', '[', ']'],
    ['h', 'j', 'k', 'l', ';', "'"],
    ['n', 'm', ',', '.', '/'],
  ]
}
export const lessons = ['dfjk', 'asl;', 'vbnm', 'tgyh', 'erui', 'qwop', 'xc,.', "z/[]'"]


export function getTime(time) {
  let ms, s, m
  ms = Math.floor(time / 10)
  s = Math.floor(ms / 60)
  m = Math.floor(s / 60)
  if (ms > 60) {
    ms = ms % 60
  }
  if (s > 60) {
    s = s % 60
  }

  return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s},${ms < 10 ? '0' + ms : ms}`
} 