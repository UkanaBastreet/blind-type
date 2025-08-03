import { FC } from "react";
import { ReactComponent as RestartIcon } from "../../../assets/restart.svg";
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
          <RestartIcon className="icon restart" />
        </button>
      </div>
    </>
  );
};
