import React, { useEffect } from "react"
import { Button } from "../UI/Button/Button"

export const Modal = ({ isEnded, unpause, repeat, exit, info }) => {
  const setModalHandler = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if (unpause && event.target.className === "modal-overlay") {
      isEnded ? exit() : unpause((prev) => !prev)
    }
  }
  return (
    <div className="modal-overlay" onClick={setModalHandler}>
      <div className="modal">
        <div className="modal-header">
          <h3>Info</h3>
          <div className="info">
            <span className="time-item info-item">
              Time
              <hr />
              {new Date(info.time).toLocaleTimeString()}
            </span>
            <span className="speed-item info-item">
              Speed
              <hr />
              {info.speed}
            </span>
            <span className="speed-item info-item">
              Letters
              <hr />
              {info.index}
            </span>
            <span className="accuracy-item info-item">
              Accuracy
              <hr />
              {info.accuracy}%
            </span>
            <span className="errors-item info-item">
              Errors
              <hr />
              {info.errors.length}
            </span>
          </div>
        </div>
        <div className="modal-content">content</div>
        <div className="modal-footer">
          <Button onClick={exit}>Quit</Button>
          <Button onClick={repeat}>Restart</Button>
          <Button onClick={setModalHandler}>Continue</Button>
        </div>
      </div>
    </div>
  )
}
