import { type FC } from "react";
import "./GameResultStatistic.scss";
import { useSelector } from "react-redux";
import type { GameResultType } from "../../../types/game.type";
import type { RootState } from "../../../../../app/store";

export const GameResultStatistic: FC = () => {
  const results = useSelector(
    (state: RootState) => state.game.results
  ) as GameResultType;

  return (
    <div className="game-result-statistic">
      <div className="base-info">
        <InfoItem title="wpm" value={results.wpm.toString()} size="big" />
        <InfoItem title="acc" value={results.acc.toString() + "%"} size="big" />
      </div>
      <div className="graph"></div>
      <div className="extra-info">
        <InfoItem
          title="words"
          value={results.text.split(" ").length.toString()}
        />
        <InfoItem title="chars" value={results.text.length.toString()} />
        <InfoItem title="errors" value={results.errors.length.toString()} />
        <InfoItem title="time" value={results.time.toString() + "s"} />
        <InfoItem
          title="date"
          value={new Date(results.date).toLocaleDateString()}
        />
      </div>
    </div>
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
