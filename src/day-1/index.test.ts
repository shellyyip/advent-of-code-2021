import { getValsFromFile, getAnswerPartOne } from "./index";

describe("Day one", () => {
  it("can run tests", () => {
    expect(true).toBe(true);
  });

  it("can parse a text file and generate an array from it", () => {
    const actualVal = getValsFromFile("./test-input.txt");
    const expectedVal = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    expect(actualVal).toEqual(expectedVal);
  });

  it("generates the correct answer for test input", () => {
    expect(getAnswerPartOne("./test-input.txt")).toEqual(7);
  });
});
