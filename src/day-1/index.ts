import { getValsFromFile, mapStringsToNumbers } from "../utils";

export const countIncreases = (nums: number[]): number => {
  let result = 0;

  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    if (curr > prev) {
      result++;
    }

    prev = curr;
  }

  return result;
};

export const getAnswerPartOne = async (
  inputFilename: string
): Promise<number> => {
  const input = mapStringsToNumbers(await getValsFromFile(inputFilename));
  const answer = countIncreases(input);
  return answer;
};

export const getSumOfWindow = (measurements: number[]): number =>
  measurements.reduce((a, b) => a + b);

export const getWindowSums = (measurements: number[]): number[] => {
  const result = [];
  const currWindow = [];

  // Go through every measurement.
  // Fill the window until it is length 3.
  // If it's length 3 and we are adding another measurement, remove the first el.

  for (const m of measurements) {
    currWindow.push(m);
    if (currWindow.length > 3) {
      currWindow.shift();
      result.push(getSumOfWindow(currWindow));
    } else if (currWindow.length === 3) {
      result.push(getSumOfWindow(currWindow));
    }
  }

  return result;
};
export const getAnswerPartTwo = async (inputFilename) => {
  const input = mapStringsToNumbers(await getValsFromFile(inputFilename));
  const answer = countIncreases(getWindowSums(input));
  return answer;
};

console.log("Day 1 Part 1's answer is: " + getAnswerPartOne("./input.txt"));
console.log("Day 1 Part 2's answer is: " + getAnswerPartTwo("./input.txt"));
