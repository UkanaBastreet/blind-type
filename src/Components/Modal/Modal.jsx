import React, { useEffect } from "react"
import { Button } from "../../UI/Button/Button"
import { getTime } from "../../utils/functions"

export const Modal = ({ isEnded, unpause, restart, exit, info }) => {
  function setModalHandler(event) {
    event.stopPropagation()
    event.preventDefault()
    if (
      event.target.className === "modal-overlay" ||
      event.target.innerText === "Continue"
    ) {
      isEnded ? exit() : unpause((prev) => !prev)
    }
  }
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>Time: {getTime(info.time)}</h3>
        <div className="info">
          <div>
            <span className="time-item info-item"></span>
            <span className="speed-item info-item">
              <u>CPM</u> : {Math.floor(info.cpm)}
            </span>
            <span className="speed-item info-item">
              <u>WPM</u> : {Math.floor(info.wpm)}
            </span>
            <span className="speed-item info-item">
              <u>Words</u> : {info.words}
            </span>
          </div>
          <div>
            <span className="speed-item info-item">
              <u>Chars</u> : {info.index}
            </span>
            <span className="accuracy-item info-item">
              <u>Accuracy</u> : {info.accuracy}%
            </span>
            <span className="errors-item info-item">
              <u>Errors</u> : {info.errors.length}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="modal-content">content</div> */}
      <div className="modal-footer">
        <span className="modal-btn">
          "Tab" + "Enter" to
          <Button onClick={restart}>Restart</Button>
        </span>
        {!isEnded && (
          <span className="modal-btn">
            "Escape" to <Button onClick={setModalHandler}>Continue</Button>
          </span>
        )}
        <span className="modal-btn">
          {" "}
          "Alt" + "Q" to
          <Button onClick={exit}>Quit</Button>
        </span>
      </div>
    </div>
  )
}
