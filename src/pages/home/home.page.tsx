import { useDispatch, useSelector } from "react-redux";
import { GameField } from "src/components/GameField/GameField";
import { ModePanel } from "src/components/ModePanel/ModePanel";
import { GameResult } from "src/components/GameResult/GameResult";
import {
  changeMode,
  changeTimeLimit,
  changeWordsCount,
  keyPressed,
  next,
  restart,
  repeat
} from "src/store/slices/GameSlice";
import { RootState } from "src/store/store";
import { GamePanel } from "src/components/GamePanel/GamePanel";

export const HomePage = () => {
  const { text, index, errors, status, mode, results, timeLimit, wordsCount } =
    useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  return (
    <div className="home-page">
      <ModePanel
        changeMode={(mode) => dispatch(changeMode(mode))}
        mode={mode}
        limits={{ time: timeLimit, words: wordsCount }}
        changeTimeLimit={(limit) => dispatch(changeTimeLimit(limit))}
        changeWordsCount={(count) => dispatch(changeWordsCount(count))}
        hidden={status !== "pending"}
      />
      {status !== "finished" && text ? (
        <>
          <GameField
            onKeyPressed={(key) => dispatch(keyPressed(key))}
            text={text}
            errors={errors}
            index={index}
          />
          <GamePanel restart={() => dispatch(restart())} />
        </>
      ) : (
        results && (
          <GameResult
            next={() => dispatch(next())}
            repeat={() => dispatch(repeat())}
            results={results}
          />
        )
      )}
    </div>
  );
};
