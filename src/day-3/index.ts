import { getValsFromFile } from "../utils";

export const rotateArray = (arr: string[]): string[] => {
  const result = [];

  for (let i = 0; i < arr[0].length; i++) {
    // For each char i in first string in arr...
    const newRow = [];
    for (const el of arr) {
      newRow.push(el[i]);
    }
    result.push(newRow.join(""));
  }

  return result;
};

export const getMostCommonBit = (col: string[]) => {
  const counts = new Map();
  for (const el of col) {
    if (!counts.has(el)) {
      counts.set(el, 0);
    }
    counts.set(el, counts.get(el) + 1);
  }

  let mostCommonKey = undefined;
  for (const [key, val] of counts.entries()) {
    if (mostCommonKey === undefined || val > counts.get(mostCommonKey)) {
      mostCommonKey = key;
    }
  }

  return mostCommonKey;
};
