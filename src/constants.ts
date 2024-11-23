export const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam officia at fugiat! Sint quibusdam hic eum nemo, maiores fugiat repellendus veritatis architecto enim voluptatibus tempore ratione impedit aliquid? Nostrum";
  export const someWords = ''
export const toTime = (t: number) => {
  const m = Math.floor(t / 10 / 60).toString();
  const s = (Math.floor(t / 10) % 60).toString().padStart(2, "0");
  const ms = t % 10;
  return m + ":" + s + ":" + ms;
};
