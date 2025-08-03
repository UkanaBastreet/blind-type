import { FC } from "react";
import { ReactComponent as RestartIcon } from "../../assets/restart.svg";
import "./GamePanel.scss";
import { useDispatch } from "react-redux";
import { restart } from "src/store/slices/GameSlice";

interface GamePanelProps {}

export const GamePanel: FC<GamePanelProps> = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="game-panel">
        <button onClick={() => dispatch(restart())} className="btn">
          <RestartIcon className="icon restart" />
        </button>
      </div>
    </>
  );
};
