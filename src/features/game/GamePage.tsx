import { useSelector } from "react-redux";
import "./GamePage.scss";
import { RootState } from "src/app/store";
import { GameField } from "./components/GameField/GameField";
import { ResultField } from "./components/GameResult/ResultField";

export const GamePage = () => {
  const status = useSelector((state: RootState) => state.game.status);
  return (
    <div className="game-page">
      {status !== "finished" ? <GameField /> : <ResultField />}
    </div>
  );
};
