import { useSelector } from "react-redux";
import { GameField } from "src/components/GameField/GameField";
import { ModePanel } from "src/components/ModePanel/ModePanel";
import { GameResult } from "src/components/GameResult/GameResult";
import { RootState } from "src/store/store";
import { GamePanel } from "src/components/GamePanel/GamePanel";

export const HomePage = () => {
  const status = useSelector((state: RootState) => state.game.status);
  return (
    <div className="home-page">
      <ModePanel />
      {status !== "finished" ? (
        <>
          <GameField />
          <GamePanel />
        </>
      ) : (
        <GameResult />
      )}
    </div>
  );
};
