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
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    ctx.clearRect(0, 0, width, height);

    // Calculate data points
    let lastTime = lastGameResults.date;
    const dataPoints = lastGameResults.input.map((input) => {
      const { index, time, correct } = input;
      const timeDiff = (time - lastTime) / 1000; // Convert to seconds
      lastTime = time;
      return {
        x: (index / (lastGameResults.text.length - 1)) * (width - padding.left - padding.right) + padding.left,
        y: timeDiff,
        correct,
      };
    });

    // Find min/max for Y-axis scaling
    const yValues = dataPoints.map((p) => p.y);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    const yRange = maxY - minY || 1;

    // Scale Y coordinates
    const scaledPoints = dataPoints.map((p) => ({
      ...p,
      scaledY: height - padding.bottom - ((p.y - minY) / yRange) * (height - padding.top - padding.bottom),
    }));

    // Draw grid
    ctx.strokeStyle = "rgba(100, 181, 246, 0.1)";
    ctx.lineWidth = 1;
    ctx.font = "12px Arial";
    ctx.fillStyle = "#64b5f6";

    // Horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (i / 4) * (height - padding.top - padding.bottom);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      // Y-axis labels (in seconds with 2 decimal places)
      const value = (maxY - (i / 4) * yRange).toFixed(2);
      ctx.fillText(`${value}s`, 15, y + 3);
    }

    // Vertical grid lines
    for (let i = 0; i <= 5; i++) {
      const x = padding.left + (i / 5) * (width - padding.left - padding.right);
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, height - padding.bottom);
      ctx.stroke();

      // X-axis labels
      const progress = Math.round((i / 5) * 100);
      ctx.fillText(`${progress}%`, x - 10, height - 10);
    }

    // Draw smooth curve with gradient
    if (scaledPoints.length > 1) {
      // Create gradient
      const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
      gradient.addColorStop(0, "rgba(100, 181, 246, 0.3)");
      gradient.addColorStop(1, "rgba(100, 181, 246, 0.0)");

      // Draw area under curve (narrower)
      ctx.beginPath();
      const gradientHeight = (height - padding.top - padding.bottom) * 0.5; // 50% of height
      ctx.moveTo(scaledPoints[0].x, scaledPoints[0].scaledY + gradientHeight);
      ctx.lineTo(scaledPoints[0].x, scaledPoints[0].scaledY);

      // Smooth curve using quadratic Bezier
      for (let i = 0; i < scaledPoints.length - 1; i++) {
        const xc = (scaledPoints[i].x + scaledPoints[i + 1].x) / 2;
        const yc = (scaledPoints[i].scaledY + scaledPoints[i + 1].scaledY) / 2;
        ctx.quadraticCurveTo(scaledPoints[i].x, scaledPoints[i].scaledY, xc, yc);
      }

      ctx.lineTo(scaledPoints[scaledPoints.length - 1].x, scaledPoints[scaledPoints.length - 1].scaledY);
      ctx.lineTo(scaledPoints[scaledPoints.length - 1].x, scaledPoints[scaledPoints.length - 1].scaledY + gradientHeight);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw the line
      ctx.beginPath();
      ctx.moveTo(scaledPoints[0].x, scaledPoints[0].scaledY);

      for (let i = 0; i < scaledPoints.length - 1; i++) {
        const xc = (scaledPoints[i].x + scaledPoints[i + 1].x) / 2;
        const yc = (scaledPoints[i].scaledY + scaledPoints[i + 1].scaledY) / 2;
        ctx.quadraticCurveTo(scaledPoints[i].x, scaledPoints[i].scaledY, xc, yc);
      }

      ctx.lineTo(scaledPoints[scaledPoints.length - 1].x, scaledPoints[scaledPoints.length - 1].scaledY);
      ctx.strokeStyle = "#64b5f6";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }

    // Draw error markers
    scaledPoints.forEach((point) => {
      if (!point.correct) {
        const size = 4;
        ctx.strokeStyle = "#ff6b6b";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(point.x - size, point.scaledY - size);
        ctx.lineTo(point.x + size, point.scaledY + size);
        ctx.moveTo(point.x + size, point.scaledY - size);
        ctx.lineTo(point.x - size, point.scaledY + size);
        ctx.stroke();
      }
    });

    // Draw axis labels
    ctx.save();
    ctx.translate(18, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = "#64b5f6";
    ctx.fillText("Time per char (s)", 0, 0);
    ctx.restore();

    ctx.textAlign = "center";
    ctx.fillText("Progress", width / 2, height - 5);
  }, [lastGameResults]);

  return (
    <div ref={containerRef} className={styles.Graph}>
      <canvas ref={canvasRef} />
    </div>
  );
};
