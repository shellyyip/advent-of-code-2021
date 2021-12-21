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

function getInverseBit(bit) {
  if (bit === "1") {
    return "0";
  } else {
    return "1";
  }
}

export const getCommonBit = (col: string[], type: "most" | "least"): string => {
  const counts = new Map();
  for (const el of col) {
    if (!counts.has(el)) {
      counts.set(el, 0);
    }
    counts.set(el, counts.get(el) + 1);
  }

  let mostCommonKey = "1";
  for (const [key, val] of Array.from(counts.entries())) {
    if (mostCommonKey === undefined || val > counts.get(mostCommonKey)) {
      mostCommonKey = key;
    }
  }

  if (type === "most") {
    return mostCommonKey;
  } else {
    return getInverseBit(mostCommonKey);
  }
};

export function convertBinaryToInteger(b: string): number {
  return parseInt(b, 2);
}

export function getRate(data: string[], type: "gamma" | "epsilon"): string {
  const columns = rotateArray(data);
  const result = [];
  const commonBitType = type === "gamma" ? "most" : "least";

  columns.forEach((column) => {
    result.push(getCommonBit(column.split(""), commonBitType));
  });

  return result.join("");
}

export function getPowerConsumption(data: string[]): number {
  const gammaRate = convertBinaryToInteger(getRate(data, "gamma"));
  const epsilonRate = convertBinaryToInteger(getRate(data, "epsilon"));
  return gammaRate * epsilonRate;
}

export function getRatingInBinary(
  initialData: string[],
  type: "oxygen-generator" | "co2-scrubber"
): string {
  let remainingData = [...initialData];
  let columns = rotateArray(remainingData);
  const commonBitType = type === "oxygen-generator" ? "most" : "least";

  // For each column, from first to fifth...
  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    // Find the most common bit in this column.
    const sigBit = getCommonBit(column.split(""), commonBitType);

    // Filter out all nums from orig. data that do not have this bit in this column.
    remainingData = remainingData.filter((datum) => datum[i] === sigBit);
    if (remainingData.length === 1) {
      return remainingData[0];
    }
    columns = rotateArray(remainingData);
  }
}

export function getLifeSupportRating(data: string[]): number {
  const oxygenGenRating = convertBinaryToInteger(
    getRatingInBinary(data, "oxygen-generator")
  );
  const co2ScrubRating = convertBinaryToInteger(
    getRatingInBinary(data, "co2-scrubber")
  );
  return oxygenGenRating * co2ScrubRating;
}

(async function () {
  console.log(
    "Power Consumption: ",
    getPowerConsumption(await getValsFromFile("./day-3/input.txt"))
  );
  console.log(
    "Life Support: ",
    getLifeSupportRating(await getValsFromFile("./day-3/input.txt"))
  );
})();
