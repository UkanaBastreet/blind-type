import React from "react";
import { Key } from "./Key";

export const Keyboard = ({ keysArr }) => {
  return (
    <div className="keyboard">
      {keysArr.map((key, index) => {
        return (
          <Key
            key={index}
            keyCode={key.name}
            className={key.classList.join(" ")}
          />
        );
      })}
    </div>
  );
};
