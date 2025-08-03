import { FC } from "react";
import {
  GameModeType,
  TimeLimitType,
  WordCountType,
} from "src/types/game.type";
import "./ModePanel.scss";

interface ModePanelProps {
  mode: GameModeType;
  changeMode: (mode: GameModeType) => void;
  limits: {
    time: TimeLimitType;
    words: WordCountType;
  };
  changeTimeLimit: (limit: TimeLimitType) => void;
  changeWordsCount: (count: WordCountType) => void;
  hidden: boolean;
}

export const ModePanel: FC<ModePanelProps> = ({
  mode,
  changeMode,
  limits,
  changeTimeLimit,
  changeWordsCount,
  hidden = false,
}) => {
  const variants = {
    time: [5, 15, 30, 60] as TimeLimitType[],
    words: [10, 25, 50, 100] as WordCountType[],
  };
  return (
    <div className={"mode-panel " + (hidden ? "hidden" : "")}>
      <div className="types">
        <button
          className={"btn " + (mode === "time" ? "active" : "")}
          onClick={() => changeMode("time")}
        >
          time
        </button>
        <button
          className={"btn " + (mode === "words" ? "active" : "")}
          onClick={() => changeMode("words")}
        >
          words
        </button>
      </div>
      <div className="separator" />
      <div className="variants">
        {variants[mode].map((v) => {
          const handler = () => {
            if (mode === "time") {
              changeTimeLimit(v as TimeLimitType);
            } else {
              changeWordsCount(v as WordCountType);
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
