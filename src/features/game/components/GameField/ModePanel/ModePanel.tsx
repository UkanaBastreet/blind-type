import type { FC } from "react";
import "./ModePanel.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@app/store";
import type {
  GameModeType,
  TimeLimitType,
  WordCountType,
} from "@features/game/types/game.type";
import {
  changeMode,
  changeTimeLimit,
  changeWordsCount,
} from "@app/slices/GameSlice";

export const ModePanel: FC = () => {
  const {
    mode,
    limits,
    hidden,
    handleChangeMode,
    handleChangeTimeLimit,
    handleChangeWordsCount,
  } = useModePanel();

  return (
    <div className={"mode-panel " + (hidden ? "hidden" : "")}>
      <div className="types">
        <button
          className={"btn " + (mode === "time" ? "active" : "")}
          onClick={() => handleChangeMode("time")}
        >
          time
        </button>
        <button
          className={"btn " + (mode === "words" ? "active" : "")}
          onClick={() => handleChangeMode("words")}
        >
          words
        </button>
      </div>
      <div className="separator" />
      <div className="variants">
        {variants[mode].map((v) => {
          const handler = () => {
            if (mode === "time") {
              handleChangeTimeLimit(v as TimeLimitType);
            } else {
              handleChangeWordsCount(v as WordCountType);
            }
          };
          return (
            <button
              key={v}
              className={"btn " + (v === limits[mode] ? "active" : "")}
              onClick={handler}
            >
              {v}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const variants = {
  time: [5, 15, 30, 60] as TimeLimitType[],
  words: [10, 25, 50, 100] as WordCountType[],
};

const useModePanel = () => {
  const mode = useSelector((state: RootState) => state.game.mode);
  const timeLimit = useSelector((state: RootState) => state.game.timeLimit);
  const wordsCount = useSelector((state: RootState) => state.game.wordsCount);
  const status = useSelector((state: RootState) => state.game.status);
  const dispatch = useDispatch();
  const handleChangeMode = (mode: GameModeType): void => {
    dispatch(changeMode(mode));
  };
  const handleChangeTimeLimit = (limit: TimeLimitType): void => {
    dispatch(changeTimeLimit(limit));
  };
  const handleChangeWordsCount = (count: WordCountType): void => {
    dispatch(changeWordsCount(count));
  };
  const limits = {
    time: timeLimit,
    words: wordsCount,
  };
  const hidden = status !== "pending";
  return {
    mode,
    limits,
    hidden,
    handleChangeMode,
    handleChangeTimeLimit,
    handleChangeWordsCount,
  };
};
