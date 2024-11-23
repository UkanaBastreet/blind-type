import React, { FC } from "react";
import Letter from "./Letter";

interface WordProps {
  word: string;
}

const Word: FC<WordProps> = ({ word }) => {
  return (
    <span className="Word">
      {word.split("").map((l) => (
        <Letter letter={l} key={l} />
      ))}
    </span>
  );
};

export default Word;
