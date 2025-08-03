import { FC } from "react";
import { ReactComponent as RepeatIcon } from "../../../assets/repeat.svg";
import { ReactComponent as NextIcon } from "../../../assets/arrow-right.svg";
import "./GameResultPanel.scss";
import { useDispatch } from "react-redux";
import { next, repeat } from "src/store/slices/GameSlice";

interface GameResultPanelProps {}

export const GameResultPanel: FC<GameResultPanelProps> = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="game-result-panel">
        <button onClick={() => dispatch(next())} className="btn">
          <NextIcon className="icon next" />
        </button>
        <button onClick={() => dispatch(repeat())} className="btn">
          <RepeatIcon className="icon restart" />
        </button>
      </div>
    </>
  );
};
