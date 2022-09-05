import React from "react"
import { NavLink } from "react-router-dom"

export const LessonItem = ({ id, type, gamesCount = 0, info = {} }) => {
  return (
    <NavLink to={`/lessons/${id}`}>
      <div className="lessons-list__item">
        <header>
          <p>{type}</p>
        </header>
        <main>
          <div>Games : {gamesCount}</div>
          <div>Accuracy: {gamesCount}</div>
          <div>WPM: 0</div>
        </main>
        <footer> </footer>
      </div>
    </NavLink>
  )
}
