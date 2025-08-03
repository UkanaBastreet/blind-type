import { FC } from "react";
import "./GameResult.scss";
import { GameResultStatistic } from "./GameResultStatistic/GameResultStatistic";
import { GameResultPanel } from "./GameResultPanel/GameResultPanel";

interface GameResultProps {}

export const ResultField: FC<GameResultProps> = () => {
  return (
      <div className="result-field">
        <GameResultStatistic />
        <GameResultPanel />
      </div>
  );
};
