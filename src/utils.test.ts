import { readFile, getValsFromFile, mapStringsToNumbers } from "./utils";

describe("utils", () => {
  it("can read a file", async () => {
    const actual = await readFile("./day-4/test-input.txt");
    //console.log(actual);
  });
  describe("getValsFromFile", () => {
    it("can get an array of strings from a file", async () => {
      const actual = await getValsFromFile("./day-1/test-input.txt");
      const expected = [
        "199",
        "200",
        "208",
        "210",
        "200",
        "207",
        "240",
        "269",
        "260",
        "263",
      ];
      expect(actual).toEqual(expected);
    });
  });

  describe("mapStringsToNumbers", () => {
    it("can convert an array of strings to an array of numbers", () => {
      const actual = mapStringsToNumbers([
        "199",
        "200",
        "208",
        "210",
        "200",
        "207",
        "240",
        "269",
        "260",
        "263",
      ]);
      const expected = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

      expect(actual).toEqual(expected);
    });
  });
});
