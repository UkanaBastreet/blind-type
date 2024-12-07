import { FC } from "react";
import { getWordAtIndex } from "../constants";
import Text from "./Text";
import Word from "./Word";

interface TextFieldProps {
  text: string;
  index: number;
}

const TextField: FC<TextFieldProps> = ({ text, index }) => {
  const { prev, curr, after } = getWordAtIndex(text, index);

  return (
    <div className="TextField">
      {prev.map((word) => (
        <Word word={word} classname="prev" key={word} />
      ))}
      {curr.word && (
        <Word word={curr.word} classname="current" index={curr.index} />
      )}
      {after.map((word) => (
        <Word word={word} classname="after" key={word} />
      ))}
    </div>
  );
};

export default TextField;
