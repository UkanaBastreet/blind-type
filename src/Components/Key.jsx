import React from "react";

export const Key = ({ name, classList }) => {
  return (
    <div className={classList.join(" ")}>
      {/* {keyCode.split("_").join(" ")} */}
      {name}
    </div>
  );
};
