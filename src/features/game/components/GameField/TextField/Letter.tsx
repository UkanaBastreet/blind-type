import { type FC } from "react";
import type { ILetter } from "../../../types/game.type";

interface LetterProps {
  letter: ILetter;
}
export const Letter: FC<LetterProps> = ({ letter }) => {
  return <span className={`Letter ${letter.status}`}>{letter.letter}</span>;
};
