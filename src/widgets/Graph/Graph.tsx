import { useSelector } from "react-redux";
import styles from "./Graph.module.css";
import { useEffect, useRef } from "react";
import type { RootState } from "@app/store";

export const Graph = () => {
  const lastGameResults = useSelector(
    (state: RootState) => state.game.lastGameResults
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!lastGameResults) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx || !containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, 0);

    let min = 0;
    let max = 0;
    let lastTime = lastGameResults.date;
    const coords = lastGameResults.input.map((input) => {
      const { char, index, time } = input;
      const x = Math.floor((index / lastGameResults.text.length) * width);
      const y = time - lastTime;
      if (y > max) max = y;
      if (y < min) min = y;
      lastTime = time;
      const haveError = lastGameResults.errors.find((e) => e.index === index);

      return { x, y, haveError, char };
    });
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    coords.forEach((c) => {
      const { x: xc, y, haveError, char } = c;
      const x = (height / (max - min)) * xc;
      ctx.lineWidth = 6;
      ctx.strokeStyle = "#007acc";
      ctx.font = "12px Arial";
      ctx.lineTo(x, y);
      if (haveError) {
        ctx.fillStyle = "tomato";
        ctx.fillText(char, x, y - 10);
      }

      ctx.fillStyle = "#1d1d1d";
      ctx.fillText(char, x, y - 10);
    });

    ctx.stroke();
  }, [lastGameResults]);
  return (
    <>
      <div ref={containerRef} className={styles.Graph}>
        <canvas
          ref={canvasRef}
          height={containerRef.current?.clientHeight}
          width={containerRef.current?.clientWidth}
        />
      </div>
    </>
  );
};
