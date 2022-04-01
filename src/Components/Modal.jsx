import React, { useEffect, useRef } from "react";

export const Modal = ({ setIsModal, restart, errorsCount, time, accuracy,enteredSymbols }) => {
  const modal = useRef(null);
  console.log(accuracy);
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
              setIsModal(false);
            }
            if (e.code === "Enter") {
              setIsModal(false);
              restart(e.timeStamp);
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
