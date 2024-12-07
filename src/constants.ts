export const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam officia at fugiat! Sint quibusdam hic eum nemo, maiores fugiat repellendus veritatis architecto enim voluptatibus tempore ratione impedit aliquid? Nostrum";

export const someWords = "";

export const toTime = (t: number, showMs: boolean = false) => {
  const m = Math.floor(t / 10 / 60).toString();
  const s = (Math.floor(t / 10) % 60).toString().padStart(2, "0");
  const ms = t % 10;
  return m + ":" + s + (showMs ? ":" + ms : "");
};

export type GAME_STATUS = "START" | "PAUSED" | "PLAYING" | "END";

export function getWordAtIndex(text: string, index: number) {
  // const words = text.split(/\s+/);
  const words = text.split(" ");
  let res: string = "";
  let resIndex = 0;
  let charIndex = 0;
  let prev: string[] = [];
  let after: string[] = [];

  words.forEach((word) => {
    if (index+1 > charIndex && index < charIndex + word.length) {
      res = word;
      resIndex=index-charIndex
      charIndex += word.length + 1;
      return;
    }
    if (index > charIndex) {
      prev.push(word);
    } else {
      after.push(word);
    }
    charIndex += word.length + 1;
  });

  return { prev, curr: { word: res, index: resIndex }, after };
}

//@ts-ignore
window.getWordAtIndex = getWordAtIndex;
