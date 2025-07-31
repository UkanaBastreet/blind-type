export interface IWord {
  letters: ILetter[];
  word: string;
  status: "" | "done" | "incorrect"| "current";
}
export interface ILetter {
  letter: string;
  status: "" | "done" | "incorrect"| "current";
}
