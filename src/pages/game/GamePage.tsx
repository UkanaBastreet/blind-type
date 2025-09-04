import { useSelector } from "react-redux";
import "./GamePage.scss";
import { GameField } from "./components/GameField/GameField";
import { ResultField } from "./components/GameResult/ResultField";
import { AnimatePresence, motion } from "framer-motion";
import type { RootState } from "../../app/store";

export const GamePage = () => {
  const status = useSelector((state: RootState) => state.game.status);
  const show = status !== "finished";
  return (
    // <div className="game-page">
    <AnimatePresence mode="wait">
      <motion.div
        key={show + ""}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="game-page"
      >
        {/* {status !== "finished" ? <GameField /> : <ResultField />} */}
        {status !== "finished" ? <GameField /> : <ResultField />}
      </motion.div>
    </AnimatePresence>
    // </div>
  );
};
