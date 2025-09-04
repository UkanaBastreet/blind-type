import type { FC } from "react";
import "./GamePanel.scss";
import RestartIcon from "@shared/assets/restart.svg?react";
import { useDispatch } from "react-redux";
import { Button } from "@shared/ui/Button/Button";
import { restart } from "@features/game/GameSlice";

export const GamePanel: FC = () => {
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
