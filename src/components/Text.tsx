import React, { FC } from "react";
import Word from "./Word";

interface TextProps {
  text: string;
}

const Text: FC<TextProps> = ({ text }) => {
  return (
    <span className="Text">
      {text.split(" ").map((word, index) => (
        <Word
          word={index === text.split(" ").length - 1 ? word : word + " "}
          key={word}
        />
      ))}
    </span>
  );
};

export default Text;
