import { FC } from "react";
import { GameType } from "src/types/game.type";
import "./GamePanel.scss";

interface GamePanelProps {
  type: GameType;
  setType: (type: GameType) => void;
  current: number;
  setCurrent: (current: number) => void;
}

export const GamePanel: FC<GamePanelProps> = ({
  type,
  setType,
  current,
  setCurrent,
}) => {
  const variants = {
    time: [5, 15, 30, 60],
    words: [10, 25, 50, 100],
  };
  return (
    <>
      <div className="game-panel">
        <div className="types">
          <button
            className={"btn " + (type === "time" ? "active" : "")}
            onClick={() => setType("time")}
          >
            time
          </button>
          <button
            className={"btn " + (type === "words" ? "active" : "")}
            onClick={() => setType("words")}
          >
            words
          </button>
        </div>
        <hr />
        <div className="variants">
          {variants[type].map((variant) => (
            <button
              className={"btn " + (variant === current ? "active" : "")}
              onClick={() => setCurrent(variant)}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
