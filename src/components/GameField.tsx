import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
  FC,
} from "react";
import { lorem, toTime } from "../constants";
import Text from "./Text";

const GameField: FC = () => {
  const [index, setIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const fieldRef = useRef(null);

  const onkeydownHandler: KeyboardEventHandler = (e) => {
    const key = e.key;
    if (key === lorem[index]) {
      setIndex((prevIndex) => prevIndex + 1);
      setPlaying(true);
    } else {
      if (key === "Backspace") {
        setIndex((prevIndex) => prevIndex - 1);
      }
      if (key === "Escape") {
        if (fieldRef.current) {
          const cur = fieldRef.current as HTMLDivElement;
          cur.blur();
        }
      }
      key.length === 1 && setErrors((err) => err + 1);
    }
  };
  const onblurHandler: FocusEventHandler = (e) => {
    if ((e.type = "focus")) {
      // setPlaying(true);
    } else {
      // setPlaying(false);
    }
  };
  useEffect(() => {
    let timerInterval: string | number | NodeJS.Timeout | undefined;
    if (playing) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100);
    }
    return () => {
      console.log("clear");

      clearInterval(timerInterval);
    };
  }, [playing]);

  return (
    <div className="GameField">
      <div className="stats">
        <span className="time">{toTime(time)}</span>
        <span className="index">{index}</span>
        <span className="errors">{errors}</span>F
      </div>
      <div
        className="text_field"
        ref={fieldRef}
        tabIndex={0}
        onBlur={onblurHandler}
        onFocus={onblurHandler}
        onKeyDown={onkeydownHandler}
      >
        <span className="GameField_block done">
          <Text text={lorem.slice(0, index)} />
        </span>
        <span className="GameField_block">
          <Text text={lorem.slice(index, lorem.length - 1)} />
        </span>
      </div>
    </div>
  );
};

export default GameField;
