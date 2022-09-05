import React from "react" // , { useState }
import { LessonItem } from "./LessonItem"
import "./LessonsPage.scss"

export const LessonsPage = ({ lessons }) => {
  // const [LessLanguage, setLessLanguage] = useState("eng")

  return (
    <div className="lessons-page">
      {/* <div className="lessons-navbar">
        <div className="lessons-navbar__item">ENGLISH</div>
      </div> */}
      <div className="lessons-lists">
        <div className="lessons-list">
          <h2 className="list-title">ENG</h2>
          <div className="list">
            {lessons.ENG.map((lesson) => (
              <LessonItem {...lesson} key={lesson.id + "eng"} />
            ))}
          </div>
        </div>

        <div className="lessons-list">
          <h2 className="list-title">RUS</h2>
          <div className="list">
            {lessons.RUS.map((lesson) => (
              <LessonItem {...lesson} key={lesson.id + "rus"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
