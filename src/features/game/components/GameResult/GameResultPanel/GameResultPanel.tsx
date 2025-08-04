import { FC } from "react";
import { ReactComponent as RepeatIcon } from "src/shared/assets/repeat.svg";
import { ReactComponent as NextIcon } from "src/shared/assets/arrow-right.svg";
import "./GameResultPanel.scss";
import { useDispatch } from "react-redux";
import { next, repeat } from "../../../slices/GameSlice";
import { Button } from "src/shared/ui/Button/Button";

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
