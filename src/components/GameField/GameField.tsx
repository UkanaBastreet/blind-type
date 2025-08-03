import { FC, useCallback, useEffect } from "react";
import { TextField } from "./TextField/TextField";
import "./GameField.scss";
import { Timer } from "./Timer/Timer";
import { useDispatch } from "react-redux";
import { keyPressed } from "src/store/slices/GameSlice";

interface GameFieldProps {}

export const GameField: FC<GameFieldProps> = () => {
  const dispatch = useDispatch();
  const keydownHandler = useCallback(
    (e: KeyboardEvent) => {
      dispatch(keyPressed(e.key));
    },
    [dispatch]
  );
  useEffect(() => {
    window.addEventListener("keypress", keydownHandler);
    return () => {
      window.removeEventListener("keypress", keydownHandler);
    };
  }, [keydownHandler]);
  return (
    <div className="game-field">
      <Timer />
      <TextField />
    </div>
  );
};
