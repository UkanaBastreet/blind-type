import React, { useEffect, useRef } from "react";

export const Modal = ({
  setIsModal,
  pause,
  unpause,
  errorsCount,
  time,
  accuracy,
  enteredSymbols,
  isStarted,
  restart,
}) => {
  const modal = useRef(null);
  useEffect(() => {
    modal.current.focus();
  }, []);
  return (
    <div className="modalBlur">
      <div className="modalContainer">
        <div
          ref={modal}
          className="modal"
          autoFocus
          onBlur={(e) => e.target.focus()}
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.code === "Escape") {
              isStarted ? pause() : unpause();
            }
            if (e.code === "Enter" && !isStarted) {
              restart();
              console.log('enter')
            }
          }}
        >
          <div className="modalHaeder">
            <div>
              <h2>Statistics</h2>
            </div>
            <button onClick={() => setIsModal(false)} className="esc">
              &#10006;
            </button>
          </div>
          <div className="modalContent">
            Press "Enter" to restart
            <br />
            Entered symbols: {enteredSymbols}
            <br />
            Erros: {errorsCount}
            <br />
            Accuracy: {accuracy}%
            <br />
            Time: {time}
          </div>
          <div className="modalFooter">foot</div>
        </div>
      </div>
    </div>
  );
};
