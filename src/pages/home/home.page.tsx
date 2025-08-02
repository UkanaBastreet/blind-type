import { useDispatch, useSelector } from "react-redux";
import { GameField } from "src/components/GameField/GameField";
import { GamePanel } from "src/components/GamePanel/GamePanel";
import { GameResult } from "src/components/GameResult/GameResult";
import {
  changeMode,
  changeTimeLimit,
  changeWordsCount,
  keyPressed,
  next,
  restart,
} from "src/store/slices/GameSlice";
import { RootState } from "src/store/store";

export const HomePage = () => {
  const { text, index, errors, status, mode, results, timeLimit, wordsCount } =
    useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  return (
    <div className="home-page">
      {status === "pending" && (
        <GamePanel
          changeMode={(mode) => dispatch(changeMode(mode))}
          mode={mode}
          limits={{ time: timeLimit, words: wordsCount }}
          changeTimeLimit={(limit) => dispatch(changeTimeLimit(limit))}
          changeWordsCount={(count) => dispatch(changeWordsCount(count))}
        />
      )}
      {status !== "finished" && text ? (
        <GameField
          onKeyPressed={(key) => dispatch(keyPressed(key))}
          text={text}
          errors={errors}
          index={index}
        />
      ) : (
        results && (
          <GameResult
            next={() => dispatch(next())}
            restart={() => dispatch(restart())}
            results={results}
          />
        )
      )}
    </div>
  );
};
