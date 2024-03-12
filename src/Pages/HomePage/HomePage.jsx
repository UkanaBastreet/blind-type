import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../UI/Button/Button";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="title">
        <h1>
          Take a Typing Test,
          <br />
          learn blind typing and improve
          <br />
          your Typing Skills
        </h1>
        <hr />
        <p>Learn touch typing and increase your productivity</p>
      </div>
      <div className="btns">
        <NavLink to={`/lessons/11`}>
          <Button>
            <h2>Start Training</h2>
          </Button>
        </NavLink>
        <NavLink to={`/lessons`}>
          <Button>
            <h2>Typing Lessons</h2>
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
