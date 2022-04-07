import React from "react";
import { Select } from "./UI/Select/Select";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="name" onClick={() => console.log("first")}>
        <h2> Blind Type</h2>
      </div>
      <div className="lessonType">
        <h3>Training</h3>
      </div>
      <div className="navbar">
        <div className="navbarPanel">
          <Select current={"ENG"} values={["RUS", "ENG"]} handler={props.setLanguage}/>
          <div className="trainig">
            <h4>Training</h4>
          </div>
          <div className="errors">
            <h4>Errors</h4>
          </div>
          <div className="settings">
            <h4>☰</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
