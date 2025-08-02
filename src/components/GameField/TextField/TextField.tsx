import { FC } from "react";
import { inputError } from "src/types/game.type";
import './TextField.scss'

interface TextFieldProps {
  text: string;
  index: number;
  errors: inputError[];
}
export const TextField: FC<TextFieldProps> = ({ text, index, errors }) => {
  const completedText = text.slice(0, index);
  const currentChar = text[index];
  const pendingText = text.slice(index + 1, text.length);
  return (
    <div className="text-field">
      <span className="completed-text">{completedText}</span>
      <span className="current-char">{currentChar}</span>
      <span className="pending-text">{pendingText}</span>
    </div>
  );
};
