import React from "react"
import { Link, NavLink } from "react-router-dom"

export const Header = ({ theme, setTheme }) => {
  return (
    <div className="header">
      <Link to={"/"}>
        <span className="header__title">
          <h1>Blind Type </h1>
          <small> 2.0 Reborn</small>
        </span>
      </Link>

      <span className="header__lesson-type">
        <NavLink to={"/lessons"}>Lessons</NavLink>
      </span>

      <span className="header__navbar">
        <span>Sign In</span>
        <span
          onClick={() => setTheme((theme) => !theme)}
          className="theme-icon"
        >
          {theme ? <>&#9790;</> : <>&#9728;</>}
        </span>
      </span>
    </div>
  )
}
