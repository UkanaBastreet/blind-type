import { FC } from "react";
import { GameResultsType } from "src/types/game.type";
import "./GameStatistic.scss";

interface GameStatisticProps {
  results: GameResultsType;
}

export const GameStatistic: FC<GameStatisticProps> = ({ results }) => {
  return (
    <>
      <div className="game-statistic">
        <div className="base-info">
          <InfoItem title="wpm" value={results.wpm.toString()} size="big" />
          <InfoItem
            title="acc"
            value={results.acc.toString() + "%"}
            size="big"
          />
        </div>
        <div className="graph"></div>
        <div className="extra-info">
          <InfoItem title="chars" value={results.text.length.toString()} />
          <InfoItem title="errors" value={results.errors.length.toString()} />
          <InfoItem title="time" value={results.time.toString() + "s"} />
          <InfoItem title="date" value={new Date(results.date).toLocaleDateString()} />
        </div>
      </div>
    </>
  );
};

interface InfoItemProps {
  title: string;
  value: string;
  size?: "small" | "common" | "big";
}
export const InfoItem: FC<InfoItemProps> = ({
  title,
  value,
  size = "common",
}) => {
  return (
    <div className={"info-item " + size}>
      <div className="name">{title}</div>
      <div className="value">{value}</div>
    </div>
  );
};
