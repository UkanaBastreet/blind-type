import React from "react";
import { FC, ReactNode } from "react";

interface LetterProps {
  letter: string;
}

const Letter: FC<LetterProps> = ({ letter }) => {
  return <span className="Letter">{letter}</span>;
};

export default Letter;
