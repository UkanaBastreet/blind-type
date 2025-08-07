import type { FC } from "react";
import RestartIcon from "../../../../shared/assets/restart.svg?react";
import "./GamePanel.scss";
import { useDispatch } from "react-redux";
import { restart } from "../../slices/GameSlice";
import { Button } from "../../../../shared/ui/Button/Button";

interface GamePanelProps {}

export const GamePanel: FC<GamePanelProps> = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="game-panel">
        <Button onClick={() => dispatch(restart())} className="btn">
          <RestartIcon className="icon restart" />
        </Button>
      </div>
    </>
  );
};
