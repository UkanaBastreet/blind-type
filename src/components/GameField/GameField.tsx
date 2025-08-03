import { FC } from "react";
import { TextField } from "./TextField/TextField";
import "./GameField.scss";

interface GameFieldProps {}

export const GameField: FC<GameFieldProps> = () => {
  return (
    <div className="game-field">
      <TextField />
    </div>
  );
};
