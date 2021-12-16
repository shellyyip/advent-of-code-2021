import { rotateArray, getMostCommonBit } from "./index";

describe("day 3", () => {
  it("can rotate an array", () => {
    const testData = ["001", "111"];
    const actual = rotateArray(testData);
    const expected = ["01", "01", "11"];
    expect(actual).toEqual(expected);
  });

  it("can get the most common bit in a column", () => {
    const actual = getMostCommonBit([
      "0",
      "1",
      "1",
      "1",
      "1",
      "0",
      "0",
      "1",
      "1",
      "1",
      "0",
      "0",
    ]);
    const expected = "1";
    expect(actual).toEqual(expected);
  });

  it.skip("can convert binary to integer", () => {
    const testCases: [string, number][] = [
      ["10110", 22],
      ["01001", 9],
    ];
    testCases.forEach(([actual, expected]) => {
      expect(actual).toEqual(expected);
    });
  });
});
