import { FC } from "react";
import { ReactComponent as RestartIcon } from "../../assets/restart.svg";
import './GamePanel.scss'

interface GamePanelProps {
  restart: () => void;
}

export const GamePanel: FC<GamePanelProps> = ({ restart }) => {
  return (
    <>
      <div className="game-panel">
        <button onClick={restart} className="btn">
          <RestartIcon className="icon restart" />
        </button>
      </div>
    </>
  );
};
