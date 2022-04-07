import React from "react";
import { Keyboard } from "./Keyboard";
import { InputField } from "./InputField";
import { engKeyboardArr, rusKeyboardArr } from "../../Helpers/utils/utils";

export const KeysList = (props) => {
  return (
    <div className="keysList">
      <br />
      <InputField
        restart={props.restart}
        isError={props.isError}
        inputValue={props.inputValue}
        onKeyUpHandler={props.onKeyUpHandler}
        onKeyDownHandler={props.onKeyDownHandler}
      />
      <br />
      <Keyboard keysArr={props.keys} />
    </div>
  );
};
