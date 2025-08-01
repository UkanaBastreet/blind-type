import { inputError } from "src/components/GameField";

export interface IWord {
  letters: ILetter[];
  word: string;
  status: "" | "done" | "incorrect" | "current";
}
export interface ILetter {
  letter: string;
  status: "" | "done" | "incorrect" | "current";
}

export enum GameStatusEnum {
  playing,
  finished,
}
export interface GameResultsType {
  date: number;
  errors: inputError[];
  text: string;
  time: number;
  totalError: number;
  wpm: number;
  acc: number;
}
