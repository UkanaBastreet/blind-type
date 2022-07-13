import React from "react";

export const Input = ({ value, ...props }) => {
  return (
    <div className="input">
      <span className="input__input-field">
        <span className="input__input-field__overlay"></span>
        {value}
      </span>
    </div>
  );
};
