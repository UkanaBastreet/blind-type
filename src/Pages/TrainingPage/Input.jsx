import React from "react"

export const Input = React.memo(({ fetching, value, index, ...props }) => {
  // let start = index !== null && index < 15 ? 0 : index - 15
  // let count = index !== null && index < 15 ? 15 + index : 30
  value =
    index === null
      ? value
      : "                    " + value + "                    "
  value = index === null ? value : value.split("").splice(0 + index, 40)
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
                    {/* {char === " " ? "_" : char} */}
                    {char}
                  </div>
                ))}
              </div>
              <div className="value">
                {value.splice(0, 20).map((char, i) => (
                  <div key={i * 2} className="char">
                    {/* {char === " " ? "_" : char} */}
                    {char}
                  </div>
                ))}
              </div>
              <span className="slide"></span>
            </>
          )}
        </div>
      </span>
    </div>
  )
})
