import React, { useState } from "react";
import "./Select.css";

export const Select = ({ values, current, handler }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="select">
      <div className="select__header">
        <span className="select__current select__item">{current}</span>
      </div>
      <div className="select__body">
        {values.map((value, ind) => {
          return (
            <div
              key={ind}
              className="select__item"
              onClick={() => handler(value)}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
