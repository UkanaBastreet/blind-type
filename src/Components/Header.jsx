import React from "react";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="name" onClick={()=>console.log('first')}>
        <h2> Blind Type</h2>
      </div>
      <div className="lessonType">
        <h3>Training</h3>
      </div>
      <div className="navbar">
        <div className="navbarPanel">
          <div className="lessons">
            {/* <h4>Lessons</h4>
            <span className="lessonsSection">
              <ul>
                <li>wasd</li>
              </ul>
            </span> */}
            <select name="lessonsSelect" className="lessonsSelect">
              {/* {props.lessons.map(lesson=>{
                return (
                  <option value={lesson.value}></option>
                )
              })} */}
            </select>
          </div>
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
