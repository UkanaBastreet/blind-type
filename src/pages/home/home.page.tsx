import { useState } from "react";
import { GameField } from "src/components/GameField/GameField";
import { GamePanel } from "src/components/GamePanel/GamePanel";
import { GameResult } from "src/components/GameResult/GameResult";
import { GameResultType, GameStatusType, GameType } from "src/types/game.type";

export const HomePage = () => {
  const [gameResults, setGameResults] = useState<null | GameResultType>(null);
  const [gameType, setGameType] = useState<GameType>("time");
  const [current, setCurrent] = useState(15);
  const [gameStatus, setGameStatus] = useState<GameStatusType>("pending");

  function handleFinished(results: GameResultType) {
    setGameStatus("finished");
    setGameResults(results);
  }
  function handleStart() {
    setGameStatus("playing");
  }
  function restart() {
    setGameStatus("pending");
    setGameResults(null);
  }
  function next() {
    setGameStatus("pending");
    setGameResults(null);
  }

  return (
    <div className="home-page">
      {gameStatus === "pending" && (
        <GamePanel
          current={current}
          setCurrent={setCurrent}
          setType={setGameType}
          type={gameType}
        />
      )}
      {gameStatus !== "finished" ? (
        <GameField
          type={gameType}
          onFinish={handleFinished}
          gameStatus={gameStatus}
          onStart={handleStart}
        />
      ) : (
        <GameResult next={next} restart={restart} results={gameResults!} />
      )}
    </div>
  );
};
