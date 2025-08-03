import { FC } from "react";
import { TextField } from "./TextField/TextField";
import { GamePanel } from "../GamePanel/GamePanel";
import { ModePanel } from "../ModePanel/ModePanel";
import "./GameField.scss";

interface GameFieldProps {}

export const GameField: FC<GameFieldProps> = () => {
  return (
    <div className="game-field">
      <ModePanel />
      <TextField />
      <GamePanel />
    </div>
  );
};
