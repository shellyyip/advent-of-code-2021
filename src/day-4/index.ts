import { readFile } from "../utils";

class BingoGame {
  data: string;
  calledNumbers: string[];
  boards: string[][];

  constructor(data: string) {
    this.data = data;
    this.calledNumbers = this.data.split("\n")[0].split(",");
    this.boards = this.data
      .split("\n\n")
      .slice(1)
      .map((s) => s.split(" ").filter((s) => s !== ""));
  }

  run() {}
}

function generateVictoryConditions() {
  const result = [];

  // Generate horizontals.
  let row = [];
  for (let i = 0; i < 25; i++) {
    if (row.length < 5) {
      row.push(i);
    } else {
      result.push(row);
      row = [i];
    }
  }
  result.push(row);

  // Generate verticals
  let col = [];
  for (let i = 0; i <= 4; i++) {
    for (let j = i; col.length < 5; j += 5) {
      col.push(j);
    }
    result.push(col);
    col = [];
  }

  // Generate diagonals
  result.push([0, 6, 12, 18, 24]);
  result.push([4, 8, 12, 16, 20]);

  return result;
}

class BingoBoard {
  won: boolean;
  numbers: string[];
  markedIndices: number[];
  victoryConditions: number[][];

  constructor(data: string[]) {
    this.won = false;
    this.numbers = data;
    this.markedIndices = [];
    this.victoryConditions = generateVictoryConditions();
  }

  checkForWin(): void {
    if (this.markedIndices.length >= 5) {
      // Check if
    }
  }

  markBoard(calledNum: string): void {
    // Find if this calledNum is in the array of numbers on the board.
    // If so, push this spot's index to marked indices.
    const spot = this.numbers.findIndex((el) => el === calledNum);
    if (spot > -1) {
      this.markedIndices.push(spot);
    }
  }
}

export { BingoGame, BingoBoard };
