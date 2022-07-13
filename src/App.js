import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header";
import { Input } from "./Components/Input";
import { Keyboard } from "./Components/Keyboard";
import { engKeys,  values } from "./utils/constants";
import {
  onKeyDownHandler,
  onKeyUpHandler,
  onBlurHandler,
  highlightRightKey,
  highlightHandler,
} from "./utils/handlers";

function App() {
  const [keys, setKeys] = useState(engKeys);
  const [value, setValue] = useState(values.startValue);
  const [valueIndex, setValueIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  // const [isPaused, setIsPaused] = useState(false);
  // const [errorsCount, setErrorsCount] = useState(0);

  useEffect(() => {
    if (isStarted) {
      window.onload = window.focus();
      window.onkeydown = onKeyDownHandler(keys, setKeys, {
        isStarted,
        curLet: value[valueIndex],
        setValueIndex,
        valueIndex,
      });
      window.onkeyup = onKeyUpHandler(setKeys);
      window.onblur = onBlurHandler(setKeys, {});
      window.keys = keys;

      highlightRightKey(keys, setKeys, value[valueIndex]);
    } else {
      setKeys((keys) => {
        keys["Space"].graylight();
        return { ...keys };
      });
      window.onkeydown = highlightHandler(setKeys, setIsStarted, setValue);
      window.onkeyup = onKeyUpHandler(setKeys);
    }
    const clear = () => () => {
      window.onkeydown = null;
      window.onkeyup = null;
      window.onblur = null;
      delete window.keys;
    };
    if (valueIndex >= value.length || !value[valueIndex]) {
      setKeys((keys) => {
        Object.values(keys).forEach((k) => k.lightOff());
        return { ...keys };
      });
      setIsStarted(false);
      setValue(values.startValue);
      setValueIndex(0);
    }

    clear();
  }, [valueIndex, isStarted]);

  return (
    <div className="App">
      <Header />
      <Input value={value.slice(0 + valueIndex, 30 + valueIndex)} />
      <Keyboard keys={Object.values(keys)} />
    </div>
  );
}

export default App;
