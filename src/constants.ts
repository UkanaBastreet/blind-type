export const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur veniam officia at fugiat! Sint quibusdam hic eum nemo, maiores fugiat repellendus veritatis architecto enim voluptatibus tempore ratione impedit aliquid? Nostrum";
export const toTime = (ms) => {
  const m = Math.floor(ms / 6000);
  const s = Math.floor((ms % 6000) / 1000);

  return m + ":" + s;
};
