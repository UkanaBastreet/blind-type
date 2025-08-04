export interface IWord {
  letters: ILetter[];
  word: string;
  status: "" | "done" | "incorrect" | "current";
}
export interface ILetter {
  letter: string;
  status: "" | "done" | "incorrect" | "current";
}

export type GameStatusType = "pending" | "running" | "finished";

export interface GameResultType {
  date: number;
  errors: inputError[];
  text: string;
  time: number;
  totalError: number;
  wpm: number;
  acc: number;
  mode: GameModeType;
}

export interface inputError {
  index: number;
  char: string;
  input: string;
  // time: number;
}
export type GameModeType = "time" | "words";
export type WordCountType = 10 | 25 | 50 | 100;
export type TimeLimitType = 5 | 15 | 30 | 60;
export type LessonIdType = string;
