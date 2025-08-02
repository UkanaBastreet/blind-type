import { FC, useCallback, useEffect } from "react";
import { inputError } from "src/types/game.type";
import { TextField } from "../TextField/TextField";
import "./GameField.scss";

interface GameFieldProps {
  text: string;
  index: number;
  errors: inputError[];
  onKeyPressed: (key: string) => void;
}

export const GameField: FC<GameFieldProps> = ({
  text,
  index,
  errors,
  onKeyPressed,
}) => {
  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      onKeyPressed(e.key);
    },
    [onKeyPressed]
  );
  useEffect(() => {
    window.addEventListener("keypress", keydownHandler);
    return () => {
      window.removeEventListener("keypress", keydownHandler);
    };
  }, [keydownHandler]);
  return (
    <div className="game-field">
      <TextField text={text} errors={errors} index={index} />
    </div>
  );
};
