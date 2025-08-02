import { inputError } from "src/components/GameField/GameField";

export interface IWord {
  letters: ILetter[];
  word: string;
  status: "" | "done" | "incorrect" | "current";
}
export interface ILetter {
  letter: string;
  status: "" | "done" | "incorrect" | "current";
}

export type GameStatusType = "pending" | "playing" | "finished";

export interface GameResultType {
  date: number;
  errors: inputError[];
  text: string;
  time: number;
  totalError: number;
  wpm: number;
  acc: number;
  type: GameType;
}

export type GameType = "time" | "words";
