import React from "react"
import { Header } from "../Header/Header"

export const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header {...props} />
      {children}
    </>
  )
}
