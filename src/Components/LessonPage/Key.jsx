import React from "react";

export const Key = ({ keyCode, className }) => {
  return (
    <span className={className.trimStart() + " key"}>
      {keyCode.split("_").join(" ")}
    </span>
  );
};
