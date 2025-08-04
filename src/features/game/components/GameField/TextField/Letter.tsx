import { FC } from "react";
import { ILetter } from "src/features/game/types/game.type";

interface LetterProps {
  letter: ILetter;
}
export const Letter: FC<LetterProps> = ({ letter }) => {
  return <span className={`Letter ${letter.status}`}>{letter.letter}</span>;
};
