import { FC, useEffect, useRef, useState } from "react";
import "./Timer.scss";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";

interface TimerProps {}

export const Timer: FC<TimerProps> = () => {
  const status = useSelector((state: RootState) => state.game.status);
  const [time, setTime] = useState(0);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (status === "running") {
      timerRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [status]);
  return (
    <>
      <div className="timer">{time}</div>
    </>
  );
};
