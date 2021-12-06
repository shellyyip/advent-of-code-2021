const fs = require("fs");
const path = require("path");

export const getValsFromFile = (filename: string): Number[] => {
  try {
    const data = fs.readFileSync(path.join(__dirname, filename), "utf8");
    console.log("filename is ", filename);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getAnswer = () => {
  const answer = undefined;
  return "Day 1's answer is: " + answer;
};

console.log(getAnswer());
