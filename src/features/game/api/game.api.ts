export class GameApi {
  getText() {
    // return `house while from interest or want what begin same help school keep part find such course have eye group say they not mean this out to seem stand consider world we year as no world tell not long will late might by out should large may on some over open would mean long word one this get some mean be need still use also could about too who set last lead which order to many too thing never follow early govern at int`;
    return "house while from"
      .split(" ")
      .sort(() => Math.random() - 0.5)
      .join(" ")
      .trim();
  }
}
