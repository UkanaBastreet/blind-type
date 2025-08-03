import { useSelector } from "react-redux";
import { GameField } from "src/components/GameField/GameField";
import { ResultField } from "src/components/GameResult/ResultField";
import { RootState } from "src/store/store";
import "./GamePage.scss";

export const GamePage = () => {
  const status = useSelector((state: RootState) => state.game.status);
  return (
    <div className="game-page">
      {status !== "finished" ? <GameField /> : <ResultField />}
    </div>
  );
};
