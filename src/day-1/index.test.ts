import { countIncreases, getSumOfWindow, getWindowSums } from "./index";

const testInputArr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("Day one", () => {
  describe("part one", () => {
    it("counts the number of increases in an array of measurements", () => {
      expect(countIncreases(testInputArr)).toEqual(7);
    });
  });

  describe("part two", () => {
    it("can correctly sum up a given window", () => {
      const actual = getSumOfWindow([199, 200, 208]);
      const expected = 607;
      expect(actual).toEqual(expected);
    });

    it("can correctly separate a list of measurements into windows", () => {
      const actual = getWindowSums(testInputArr);
      const expected = [607, 618, 618, 617, 647, 716, 769, 792];
      expect(actual).toEqual(expected);
    });
  });
});
