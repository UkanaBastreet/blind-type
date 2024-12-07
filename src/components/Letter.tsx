import { FC } from "react";

interface LetterProps {
  letter: string;
  className?: string;
}

const Letter: FC<LetterProps> = ({ letter, className }) => {
  return (
    <span className={"Letter " + (className ? className : "")}>{letter}</span>
  );
};

export default Letter;
