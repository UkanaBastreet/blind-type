import React from "react"
import { Link, NavLink } from "react-router-dom"

export const Header = ({ theme, setTheme }) => {
  return (
    <div className="header">
      <Link to={"/"}>
        <span className="header__title">
          <h1>Blind Type </h1>
        </span>
      </Link>

      <NavLink to={"/lessons"}>
        <span className="header__lesson-type">Lessons</span>
      </NavLink>

      <span className="header__navbar">
        {/* <span>Sign In</span> */}
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
