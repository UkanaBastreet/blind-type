import React from "react";

export const InputField = ({
  inputValue,
  onKeyDownHandler,
  onKeyUpHandler,
  restart,
}) => {
  return (
    <div className="inputField">
      <div className="inputContainer">
        <input readOnly className="inputblur" value={inputValue.slice(0, 15)} />
        <input
          autoFocus
          readOnly
          onBlur={(e) => {
            onKeyUpHandler(e);
            e.target.focus();
          }}
          spellCheck={false}
          className="input"
          value={inputValue.slice(15, 30)}
          onKeyDown={onKeyDownHandler}
          onKeyUp={onKeyUpHandler}
        />
        <button className="key" onClick={restart}>
          restart
        </button>
      </div>
    </div>
  );
};
