import { FC } from "react";
import { IWord } from "src/types/text";
import { Letter } from "./Letter";

interface WordProps {
  word: IWord;
}
export const Word: FC<WordProps> = ({ word }) => {
  return (
    <span className={`Word ${word.status}`}>
      {word.letters.map((letter, index) => (
        <Letter key={index} letter={letter} />
      ))}
    </span>
  );
};
