const fs = require("fs");
const path = require("path");

export const getValsFromFile = (filename: string): Number[] => {
  try {
    const data = fs.readFileSync(path.join(__dirname, filename), "utf8");
    return data.split("\n").map((el) => parseInt(el));
  } catch (err) {
    console.error(err);
  }
};

const countIncreases = (nums: Number[]): Number => {
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

export const getAnswerPartOne = (inputFilename) => {
  const input = getValsFromFile(inputFilename);
  const answer = countIncreases(input);
  return answer;
};

console.log("Day 1 Part 1's answer is: " + getAnswerPartOne("./input.txt"));
