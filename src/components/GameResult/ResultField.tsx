import { FC } from "react";
import "./ResultField.scss";
import { GameResultStatistic } from "./GameResultStatistic/GameResultStatistic";
import { GameResultPanel } from "./GameResultPanel/GameResultPanel";

interface ResultFieldProps {}

export const ResultField: FC<ResultFieldProps> = () => {
  return (
      <div className="result-field">
        <GameResultStatistic />
        <GameResultPanel />
      </div>
  );
};
