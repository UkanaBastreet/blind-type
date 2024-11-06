import React from "react";

export const InputField = React.memo(({ fetching, value, index, ...props }) => {
  value =
    index === null
      ? value
      : "                    " + value + "                    ";
  value = index === null ? value : value.split("").splice(0 + index, 40);
  return (
    <div className="input">
      <span className="input__input-field">
        <div className="input__input-text">
          {index === null ? (
            <div className="startValue">{value}</div>
          ) : (
            <>
              <div className="value dark">
                {value.splice(0, 20).map((char, i) => (
                  <div key={i} className="char">
                    {char}
                  </div>
                ))}
              </div>
              <div className="value">
                {value.splice(0, 20).map((char, i) => (
                  <div key={i * 2} className="char">
                    {char}
                  </div>
                ))}
              </div>
              <span className="slide" />
            </>
          )}
        </div>
      </span>
    </div>
  );
});
