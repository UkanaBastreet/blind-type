import { type FC } from "react";
import "./ResultField.scss";
import { GameResultStatistic } from "./GameResultStatistic/GameResultStatistic";
import { GameResultPanel } from "./GameResultPanel/GameResultPanel";

export const ResultField: FC = () => {
  return (
    <div className="result-field">
      <GameResultStatistic />
      <GameResultPanel />
    </div>
  );
};
