import React, { FC } from "react";
import Word from "./Word";
import { getWordAtIndex } from "../constants";

interface TextProps {
  text: string;
}

const Text: FC<TextProps> = ({ text }) => {
  // const currWord = getWordAtIndex(text, index);
  return (
    <span className="Text">
      {text.split(" ").map((word, index) => {
        return <Word word={word} key={"prev"} />;
      })}
    </span>
  );
};

export default Text;
