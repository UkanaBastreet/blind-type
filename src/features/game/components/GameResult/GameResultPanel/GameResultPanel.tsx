import type { FC } from "react";
import RepeatIcon from "../../../../../shared/assets/repeat.svg?react";
import NextIcon from "../../../../../shared/assets/arrow-right.svg?react";
import "./GameResultPanel.scss";
import { useDispatch } from "react-redux";
import { next, repeat } from "../../../slices/GameSlice";
import { Button } from "../../../../../shared/ui/Button/Button";

interface GameResultPanelProps {}

export const GameResultPanel: FC<GameResultPanelProps> = () => {
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
