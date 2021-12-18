import { getValsFromFile } from "../utils";
import {
  rotateArray,
  getCommonBit,
  convertBinaryToInteger,
  getRate,
  getPowerConsumption,
  getRating,
} from "./index";

describe("day 3", () => {
  it("can rotate an array", () => {
    const testData = ["001", "111"];
    const actual = rotateArray(testData);
    const expected = ["01", "01", "11"];
    expect(actual).toEqual(expected);
  });

  it("can get the most common bit in a column", () => {
    const actual = getCommonBit(
      ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
      "most"
    );
    const expected = "1";
    expect(actual).toEqual(expected);
  });

  it("can get the least common bit in a column", () => {
    const actual = getCommonBit(
      ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"],
      "least"
    );
    const expected = "0";
    expect(actual).toEqual(expected);
  });

  it("can convert binary to integer", () => {
    const testCases: [string, number][] = [
      ["10110", 22],
      ["01001", 9],
    ];
    testCases.forEach(([actual, expected]) => {
      expect(convertBinaryToInteger(actual)).toEqual(expected);
    });
  });

  it("can get the gamma rate in binary from a set of data", async () => {
    const testData = await getValsFromFile("./day-3/test-input.txt");
    const actual = getRate(testData, "gamma");
    const expected = "10110";
    expect(actual).toEqual(expected);
  });

  it("can get the correct power consumption", async () => {
    const testData = await getValsFromFile("./day-3/test-input.txt");
    const actual = getPowerConsumption(testData);
    const expected = 198;
    expect(actual).toEqual(expected);
  });

  it("can get the correct oxygen generator rating", async () => {
    const testData = await getValsFromFile("./day-3/test-input.txt");
    const actual = getRating(testData, "oxygen-generator");
    const expected = 23;
    expect(actual).toEqual(expected);
  });

  it("can get the correct CO2 scrubber rating", async () => {
    const testData = await getValsFromFile("./day-3/test-input.txt");
    const actual = getRating(testData, "co2-scrubber");
    const expected = 10;
    expect(actual).toEqual(expected);
  });
});
