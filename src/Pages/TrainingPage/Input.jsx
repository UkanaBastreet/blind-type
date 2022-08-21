import React from "react"
import { startValue } from "../../utils/constants"

export const Input = React.memo(({ value, index, ...props }) => {
  return (
    <div className="input">
      <span className="input__input-field">
        <div className="input__input-text">
          {index === null ? (
            startValue
          ) : (
            <>
              <div className="input__input-field__overlay"></div>
              <span className="completed-text">
                {value
                  .split("")
                  .splice(0, index)
                  .reverse()
                  .splice(0, 15)
                  .reverse()
                  .map((char, index) => {
                    return (
                      <div key={index} className="char">
                        {char}
                      </div>
                    )
                  })}
              </span>
              <span className="current-text">
                {value
                  .split("")
                  .splice(index, 15)
                  .map((char, index) => {
                    return (
                      <div key={index} className="char">
                        {char}
                      </div>
                    )
                  })}
              </span>
            </>
          )}
        </div>
      </span>
    </div>
  )
})
