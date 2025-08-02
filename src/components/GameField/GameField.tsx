import { FC, useCallback, useEffect, useRef, useState } from "react";
import { TextField } from "../TextField/TextField";
import { GameResultType, GameStatusType, GameType } from "src/types/game.type";
import "./GameField.scss";

interface GameFieldProps {
  onFinish: (results: GameResultType) => void;
  onStart: () => void;
  type: GameType;
  gameStatus: GameStatusType;
}

export const GameField: FC<GameFieldProps> = ({
  onFinish,
  onStart,
  type,
  gameStatus,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(0);
  const [errors, setErrors] = useState<inputError[]>([]);
  const [isDone, setIsDone] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(false);

  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!startTimeRef.current && e.key === text[index]) {
        startTimeRef.current = Date.now();
        isPlayingRef.current = true;
        onStart();
        timerRef.current = setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1000);
      }
      if (e.key === text[index]) {
        setIndex((prev) => prev + 1);
      } else if (isPlayingRef.current) {
        setErrors((prev) => [
          ...prev,
          {
            index,
            input: e.key,
            char: text[index],
            time: time,
          },
        ]);
      }
    },
    [index, onStart, text, time]
  );

  // game ending
  useEffect(() => {
    if (text.length !== 0 && index === text.length && !isDone) {
      setIsDone(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      const gameData = {
        text,
        time,
        errors,
        totalError: errors.length,
        wpm: Math.round(text.split(" ").length / (time / 60)),
        date: startTimeRef.current!,
        acc: Math.round(((text.length - errors.length) / text.length) * 100),
        type,
      };
      localStorage.setItem(
        "training: " + new Date().toLocaleString(),
        JSON.stringify(gameData)
      );
      onFinish(gameData);
    }
  }, [errors, index, isDone, onFinish, text, time, type]);

  //keydown flow
  useEffect(() => {
    if (text.length === 0 || isDone) return;
    window.addEventListener("keydown", keydownHandler);
    return () => window.removeEventListener("keydown", keydownHandler);
  }, [isDone, keydownHandler, text]);

  // text setting
  useEffect(() => {
    setText(getText());
  }, []);

  //clear timeout
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="game-field">
      {gameStatus === "playing" ? <h2>{time}</h2> : ""}
      <TextField text={text} errors={errors} index={index} />
    </div>
  );
};

export interface inputError {
  index: number;
  char: string;
  input: string;
  time: number;
}

function getText() {
  return (
    "house while from"
      // "house while from interest or want what begin same help school keep part find such course have eye group say they not mean this out"
      .split(" ")
      .sort(() => Math.random() - 0.5)
      .join(" ")
      .trim()
  );
}
