import React, { useState } from "react";
import { LessonItem } from "./LessonItem";

export const LessonsPage = ({ lessons }) => {
  const [LessLanguage, setLessLanguage] = useState("eng");

  return (
    <div className="lessons-page">
      <div className="lessons-navbar">
        <div className="lessons-navbar__item">language</div>
        <div className="lessons-navbar__item">language</div>
        <div className="lessons-navbar__item">language</div>
      </div>
      <div className="lessons-list">
        {lessons.map((lesson) => (
          <LessonItem {...lesson} key={lesson.id} />
        ))}
      </div>
    </div>
  );
};
