import React from "react"

export const Key = ({ name, classList, id, hand }) => {
  return <div className={classList.join(" ")}>{name}</div>
}
