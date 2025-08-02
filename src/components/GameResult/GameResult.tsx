import { FC } from "react";
import { GameResultType } from "src/types/game.type";
import "./GameResult.scss";
import { GameResultStatistic } from "./GameResultStatistic/GameResultStatistic";
import { GameResultPanel } from "./GameResultPanel/GameResultPanel";

interface GameResultProps {
  results: GameResultType;
  restart: () => void;
  next: () => void;
}

export const GameResult: FC<GameResultProps> = ({ results, next, restart }) => {
  return (
    <>
      <div className="game-result">
        <GameResultStatistic results={results} />
        <GameResultPanel next={next} restart={restart} />
      </div>
    </>
  );
};
