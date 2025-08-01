import { useState } from "react";
import { GameField } from "src/components/GameField";
import { GameStatistic } from "src/components/GameStatistic";
import { GameResultsType, GameStatusEnum } from "src/types/game.type";

export const HomePage = () => {
  const [gameStatus, setGameStatus] = useState<GameStatusEnum>(
    GameStatusEnum.playing
  );
  const [gameResults, setGameResults] = useState<null | GameResultsType>(null);

  function handleFinished(results: GameResultsType) {
    setGameStatus(GameStatusEnum.finished);
    setGameResults(results);
  }

  return (
    <div className="home-page">
      {gameStatus === GameStatusEnum.playing ? (
        <GameField onFinish={handleFinished} />
      ) : (
        <GameStatistic results={gameResults!} />
      )}
    </div>
  );
};
