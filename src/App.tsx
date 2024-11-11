import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import { lorem, toTime } from "./constants.ts";

function App() {
  const [index, setIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const fieldRef = useRef(null);

  const onkeydownHandler: KeyboardEventHandler = (e) => {
    const key = e.key;
    if (key === lorem[index]) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      if (key === "Backspace") {
        setIndex((prevIndex) => prevIndex - 1);
      }
      if (key === "Escape") {
        if (fieldRef.current) {
          const cur = fieldRef.current as HTMLDivElement;
          cur!.blur();
        }
      }
      key.length === 1 && setErrors((err) => err + 1);
    }
  };
  const onblurHandler: FocusEventHandler = (e) => {
    console.log("e : ", e.type);
    if ((e.type = "focus")) {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);
    return () => {
      clearInterval(timerInterval);
    };
  }, [playing]);
  return (
    <div className="App">
      <div className="GameField">
        <div className="stats">{toTime(time) + " " + index + " " + errors}</div>
        <div
          className="text_field"
          ref={fieldRef}
          tabIndex={0}
          onBlur={onblurHandler}
          onFocus={onblurHandler}
          onKeyDown={onkeydownHandler}
        >
          <span className="GameField_block visible">
            {lorem.slice(0, index)}
          </span>
          <span className="GameField_block" style={{ color: "gray" }}>
            {lorem.slice(index, lorem.length - 1)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
