import type { FC } from "react";
import RepeatIcon from "@shared/assets/repeat.svg?react";
import NextIcon from "@shared/assets/arrow-right.svg?react";
import "./GameResultPanel.scss";
import { useDispatch } from "react-redux";
import { Button } from "@shared/ui/Button/Button";
import { next, repeat } from "@features/game/GameSlice";


export const GameResultPanel: FC = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="game-result-panel">
        <Button onClick={() => dispatch(next())}>
          <NextIcon className="icon next" />
        </Button>
        <Button onClick={() => dispatch(repeat())}>
          <RepeatIcon className="icon restart" />
        </Button>
      </div>
    </>
  );
};
