import React from "react";
import { Header } from "../Header";
import { KeysList } from "./KeysList";

export const LessonPage = (props) => {
  return (
    <div>
      <KeysList {...props} />
    </div>
  );
};
