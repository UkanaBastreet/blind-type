import React from "react";
import { NavLink } from "react-router-dom";

export const LessonItem = ({ id, lesson, gamesCount = 0, info = {} }) => {
  return (
    <div className="lessons-list__item">
      <NavLink to={`/lessons/${id}`}>
        <header>
          <h2>
            {lesson}
          </h2>
        </header>
        <main>{gamesCount}</main>
        <footer>{gamesCount}</footer>
      </NavLink>
    </div>
  );
};
