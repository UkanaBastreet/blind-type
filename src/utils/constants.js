import { KeyC } from "../Components/Key.class";

export const engKeysArr = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "Semicolon",
  "Quote",
  "Enter",
  "ShiftLeft",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "Comma",
  "Period",
  "Slash",
  "ShiftRight",
  "ControlLeft",
  "Windows",
  "AltLeft",
  "Space",
  "AltRight",
  "FuncLock",
  "Menu",
  "ControlRight",
].map((key, index) => {
  let obj = {
    Backslash: "\\",
    Minus: "-",
    Equal: "=",
    BracketLeft: "[",
    BracketRight: "]",
    Semicolon: ";",
    Quote: "'",
    Comma: ",",
    Period: ".",
    Slash: "/",
    Tab: "Tab",
    CapsLock: "CapsLock",
    Enter: "Enter",
    Backspace: "Backspace",
    Windows: "Windows",
    Menu: "Menu",
    Backquote: "`",
    ShiftLeft: "Shift",
    ShiftRight: "Shift",
    ControlLeft: "Control",
    ControlRight: "Control",
    AltLeft: "Alt",
    AltRight: "Alt",
    FuncLock: "Fn",
    Space: " ",
  };
  if (obj[key]) {
    return {
      id: index,
      name: obj[key],
      code: key,
      classList: ["key", key],
    };
  }
  if (key.indexOf("Digit") !== -1) {
    return {
      id: index,
      name: key.slice(5, 6),
      code: key,
      classList: ["key"],
    };
  }
  if (key.length === 1) {
    return {
      id: index,
      name: key,
      code: "Key" + key.toLocaleUpperCase(),
      classList: ["key"],
    };
  }
  return key;
});

export const engKeys = engKeysArr
  .map((key) => {
    return new KeyC(key);
  })
  .reduce((target, key) => {
    target[key.code] = key;
    return target;
  }, {});

export const values = {
  // eng: {
  startValue: 'Press "Space" to start',
  value:
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione deserunt ipsam aliquam ut dolor fugit doloremque, qui natus illum nam voluptatibus perspiciatis sequi, mollitia porro fugiat vitae laborum est placeat.`,
  // },
};
