import React from "react"
import s from "./Button.module.scss"

export const Button = ({ children, ...props }) => {
  return (
    <span className={s.Button} {...props}>
      <button>{children}</button>
    </span>
  )
}
