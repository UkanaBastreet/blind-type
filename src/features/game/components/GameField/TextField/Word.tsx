import { FC } from "react";
import { Letter } from "./Letter";
import { IWord } from "src/features/game/types/game.type";

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
