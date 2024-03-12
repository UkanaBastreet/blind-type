import React from "react"
import { Key } from "./Key"

export const Keyboard = ({ keys, ...props }) => {
  return (
    <div className="keyboard">
      {keys.map((key, index) => {
        return <Key key={index} {...key} />
      })}
    </div>
  )
}
