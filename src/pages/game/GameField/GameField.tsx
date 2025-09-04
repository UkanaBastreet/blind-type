import { type FC } from "react";
import { TextField } from "./TextField/TextField";
import { GamePanel } from "../GamePanel/GamePanel";
import { ModePanel } from "./ModePanel/ModePanel";
import "./GameField.scss";

export const GameField: FC = () => {
  return (
    <div className="game-field">
      <ModePanel />
      <TextField />
      <GamePanel />
    </div>
  );
};
