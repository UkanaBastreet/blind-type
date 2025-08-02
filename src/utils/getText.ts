import {
  GameModeType,
  GameResultType,
  ILetter,
  IWord,
  TimeLimitType,
  WordCountType,
} from "src/types/game.type";
import { wordsArr } from "./words";

const words =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.".toLowerCase();

export const getTextArr = (text: string = words): IWord[] => {
  const wordsArray: IWord[] = text.split(" ").map((word) => {
    const letters: ILetter[] = word.split("").map((letter) => ({
      letter,
      status: "",
    }));
    letters.push({
      letter: " ",
      status: "",
    });
    return {
      letters,
      word,
      status: "",
    };
  });
  wordsArray[0].status = "current";
  wordsArray[0].letters[0].status = "current";

  return wordsArray;
};

export function getText(
  mode: GameModeType,
  wordsCount: WordCountType,
  timeLimit: TimeLimitType
) {
  const count = mode === "words" ? wordsCount : timeLimit * 2;
  return wordsArr.splice(0, count).join(" ");
}

export function addToLocalStorage(game: GameResultType) {
  const games = localStorage.getItem("games");
  if (games) {
    const items = JSON.parse(games) as GameResultType[];
    items.push(game);
    localStorage.setItem("games", JSON.stringify(items));
  }
}
