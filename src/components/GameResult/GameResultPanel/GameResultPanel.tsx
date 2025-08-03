import { FC } from "react";
import { ReactComponent as RepeatIcon } from "../../../assets/repeat.svg";
import { ReactComponent as NextIcon } from "../../../assets/arrow-right.svg";
import "./GameResultPanel.scss";

interface GameResultPanelProps {
  repeat: () => void;
  next: () => void;
}

export const GameResultPanel: FC<GameResultPanelProps> = ({
  next,
  repeat,
}) => {
  return (
    <>
      <div className="game-result-panel">
        <button onClick={next} className="btn">
          <NextIcon className="icon next" />
        </button>
        <button onClick={repeat} className="btn">
          <RepeatIcon className="icon restart" />
        </button>
      </div>
    </>
  );
};
