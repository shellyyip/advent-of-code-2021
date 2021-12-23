import { readFile } from "../utils";

class BingoGame {
  data: string;
  calledNumbers: string[];
  boards: BingoBoard[];
  winningBoardIndices: number[];

  constructor(data: string) {
    this.data = data;
    this.calledNumbers = this.data.split("\n")[0].split(",");
    this.boards = this.data
      .split("\n\n")
      .slice(1)
      .map((rawBoard) => {
        const boardData = rawBoard
          .split(/\s/)
          .filter((num) => num !== "")
          .map((num) => num.trim());
        return new BingoBoard(boardData);
      });
    this.winningBoardIndices = [];
  }

  run() {
    for (const num of this.calledNumbers) {
      for (let i = 0; i < this.boards.length; i++) {
        const Board = this.boards[i];
        Board.takeTurn(num);
        if (Board.won) {
          this.winningBoardIndices.push(i);
        }
      }
    }
  }
}

function generateVictoryConditionsIndices(): number[][] {
  const result = [];

  // Generate horizontals.
  let row: number[] = [];
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
  // result.push([0, 6, 12, 18, 24]);
  // result.push([4, 8, 12, 16, 20]);

  return result;
}

class BingoBoard {
  won: boolean;
  numbers: string[];
  calledNumbers: string[];
  markedIndices: number[];
  victoryConditions: string[][];
  winningSum: number;
  score: number;

  constructor(data: string[]) {
    this.won = false;
    this.numbers = data;
    this.markedIndices = [];
    this.victoryConditions = generateVictoryConditionsIndices().map((arr) =>
      arr.map((i) => this.numbers[i])
    );
    this.winningSum = 0;
    this.score = 0;
    this.calledNumbers = [];
  }

  checkForWin(): void {
    if (this.markedIndices.length >= 5) {
      // Check if any of the victory conditions have length 0.
      // If so, set won to true.
      for (const cond of this.victoryConditions) {
        if (cond.length === 0) {
          this.won = true;
          this.sumRemainingNumbers();
          this.calculateScore(
            parseInt(this.calledNumbers[this.calledNumbers.length - 1])
          );
          return;
        }
      }
    }
  }

  markBoard(calledNum: string): void {
    // Find if this calledNum is in the array of numbers on the board.
    // If so, push this spot's index to marked indices.
    this.calledNumbers.push(calledNum);
    const spot = this.numbers.findIndex((el) => el === calledNum);
    if (spot > -1) {
      this.markedIndices.push(spot);
      // Delete this index from all victory conditions.
      this.victoryConditions.forEach((cond) => {
        const i = cond.findIndex((el) => el === calledNum);
        if (i > -1) {
          cond.splice(i, 1);
        }
      });
    }
  }

  sumRemainingNumbers() {
    const remainingNumbers = this.numbers.filter(
      (n, i) => !this.markedIndices.includes(i)
    );

    this.winningSum = remainingNumbers
      .map((n) => parseInt(n))
      .reduce((a = 0, c) => a + c);
  }

  calculateScore(lastNum: number) {
    this.score = this.winningSum * lastNum;
  }

  takeTurn(calledNum: string): void {
    if (this.won === false) {
      this.markBoard(calledNum);
      this.checkForWin();
    }
  }
}

function findLastWinningGame(Game: BingoGame): BingoBoard | null {
  let longest = 0;
  let board = null;

  for (const Board of Game.boards) {
    const currLen = Board.calledNumbers.length;
    if (currLen >= longest) {
      longest = currLen;
      board = Board;
    }
  }
  return board;
}

(async function () {
  const Game = new BingoGame(await readFile("./day-4/input.txt"));
  Game.run();
  console.log(Game);
  console.log(
    "first winning game: ",
    Game.boards[Game.winningBoardIndices[0]].score
  );
  console.log("last winning game: ", findLastWinningGame(Game)?.score);
})();

export { BingoGame, BingoBoard };
