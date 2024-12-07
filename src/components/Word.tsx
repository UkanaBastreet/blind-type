import React, { FC } from "react";
import Letter from "./Letter";

interface WordProps {
  word: string;
  classname?: string;
  index?: number;
}

const Word: FC<WordProps> = ({ word, classname, index }) => {
  return (
    <span className={"Word " + classname}>
      {word.split("").map((l, i) => {
        if (index !== undefined) {
          const isCurrent = index === i;
          const isPrev = i < index;
          const classname = isCurrent ? "current" : isPrev ? "prev" : "";
          return <Letter className={classname} letter={l} key={l + i} />;
        }
        return <Letter letter={l} key={l + i} />;
      })}
    </span>
  );
};

export default Word;
