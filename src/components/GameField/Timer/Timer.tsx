import { FC, useEffect, useRef, useState } from "react";
import "./Timer.scss";

interface TimerProps {}

export const Timer: FC<TimerProps> = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="timer">{time}</div>
    </>
  );
};
