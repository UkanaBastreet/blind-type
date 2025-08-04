import { FC } from "react";
import { ReactComponent as RestartIcon } from "src/shared/assets/restart.svg";
import "./GamePanel.scss";
import { useDispatch } from "react-redux";
import { restart } from "../../slices/GameSlice";
import { Button } from "src/shared/ui/Button/Button";

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
