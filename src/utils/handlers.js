import { values } from "./constants";

const prevDefArr = ["Tab", "Alt", " ", "ContextMenu"];

export function highlightRightKey(keys, setKeys, curLet) {
  if (!curLet) return;
  Object.values(keys).forEach((key) => {
    (key.name === "Shift" && curLet !== curLet.toLowerCase()) ||
    key.name === curLet.toLowerCase()
      ? key.graylight()
      : key.lightOff();
  });

  setKeys({ ...keys });
}

export function onKeyDownHandler(
  keys,
  setKeys,
  { isStarted, curLet, setValueIndex, valueIndex }
) {
  return (event) => {
    if (!isStarted || !curLet) return;
    if (prevDefArr.indexOf(event.key) !== -1) {
      event.preventDefault();
    }
    if (curLet !== curLet.toLowerCase() && event.key === "Shift") {
      keys[event.code].bluelight();
    }
    keys[event.code][event.key === curLet ? "bluelight" : "redlight"]();
    if (event.key === curLet) {
      setValueIndex(++valueIndex);
    }
    setKeys({ ...keys });
  };
}

export function onKeyUpHandler(setKeys) {
  return (event) => {
    setKeys((keys) => {
      keys[event.code] && keys[event.code].blueOff().redOff();
      return { ...keys };
    });
  };
}

export function onBlurHandler(setKeys) {
  return () => {
    setKeys((keys) => {
      for (const key in keys) {
        if (Object.hasOwnProperty.call(keys, key)) {
          keys[key].blueOff().redOff();
        }
      }
      return { ...keys };
    });
  };
}
export function highlightHandler(setKeys, setIsStarted, setValue) {
  return (event) => {
    if (prevDefArr.indexOf(event.key) !== -1) {
      event.preventDefault();
    }
    setKeys((keys) => {
      keys[event.code]?.bluelight();
      return {...keys}
    });
    if (event.key === " ") {
      setIsStarted((is) => !is);
      setValue(values.value);
    }
  };
}
