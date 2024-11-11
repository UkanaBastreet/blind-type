import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import "./App.css";
import { lorem } from "./constants.ts";

function App() {
  const [index, setIndex] = useState(0);

  const onkeydownHandler: KeyboardEventHandler = (e) => {
    const key = e.key;
    if (key === lorem[index]) {
      setIndex((prevIndex) => prevIndex + 1);
    }
    if(key==='Backspace'){
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const onblurHandler: FocusEventHandler = (e) => {
    console.log("e : ", e.type);
  };
  return (
    <div className="App">
      <div
        onBlur={onblurHandler}
        onFocus={onblurHandler}
        onKeyDown={onkeydownHandler}
        tabIndex={0}
        className="GameField"
      >
        <span className="GameField_block visible" >{lorem.slice(0, index)}</span>
        <span className="GameField_block" style={{ color: "gray" }}>
          {lorem.slice(index, lorem.length - 1)}
        </span>
      </div>
    </div>
  );
}

export default App;
