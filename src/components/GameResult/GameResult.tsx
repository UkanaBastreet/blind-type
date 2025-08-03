import { FC } from "react";
import "./GameResult.scss";
import { GameResultStatistic } from "./GameResultStatistic/GameResultStatistic";
import { GameResultPanel } from "./GameResultPanel/GameResultPanel";

interface GameResultProps {}

export const GameResult: FC<GameResultProps> = () => {
  return (
      <div className="game-result">
        <GameResultStatistic />
        <GameResultPanel />
      </div>
  );
};
