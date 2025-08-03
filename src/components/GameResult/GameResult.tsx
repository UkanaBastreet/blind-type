import { FC } from "react";
import { GameResultType } from "src/types/game.type";
import "./GameResult.scss";
import { GameResultStatistic } from "./GameResultStatistic/GameResultStatistic";
import { GameResultPanel } from "./GameResultPanel/GameResultPanel";

interface GameResultProps {
  results: GameResultType;
  repeat: () => void;
  next: () => void;
}

export const GameResult: FC<GameResultProps> = ({ results, next, repeat }) => {
  return (
    <>
      <div className="game-result">
        <GameResultStatistic results={results} />
        <GameResultPanel next={next} repeat={repeat} />
      </div>
    </>
  );
};
