import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <button {...props} className={"Button " + props.className}>
      {props.children}
    </button>
  );
};
