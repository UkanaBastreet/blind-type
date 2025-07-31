import { ILetter, IWord } from "src/types/text";

const words =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.".toLowerCase();
export const getText = (text: string = words): IWord[] => {
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
