import { readFile } from "../utils";
import { BingoGame, BingoBoard } from "./index";

let TestBingoGame;
beforeAll(async () => {
  const testData = await readFile("./day-4/test-input.txt");
  TestBingoGame = new BingoGame(testData);
});

describe("day 4", () => {
  describe("input parsing", () => {
    it("can parse a list of called numbers", async () => {
      const expected =
        "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1".split(
          ","
        );
      const actual = TestBingoGame.calledNumbers;
      expect(actual).toEqual(expected);
    });

    it("can parse bingo boards from input", () => {
      const expected = [
        new BingoBoard([
          "22",
          "13",
          "17",
          "11",
          "0",
          "8",
          "2",
          "23",
          "4",
          "24",
          "21",
          "9",
          "14",
          "16",
          "7",
          "6",
          "10",
          "3",
          "18",
          "5",
          "1",
          "12",
          "20",
          "15",
          "19",
        ]),
        new BingoBoard([
          "3",
          "15",
          "0",
          "2",
          "22",
          "9",
          "18",
          "13",
          "17",
          "5",
          "19",
          "8",
          "7",
          "25",
          "23",
          "20",
          "11",
          "10",
          "24",
          "4",
          "14",
          "21",
          "16",
          "12",
          "6",
        ]),
        new BingoBoard([
          "14",
          "21",
          "17",
          "24",
          "4",
          "10",
          "16",
          "15",
          "9",
          "19",
          "18",
          "8",
          "23",
          "26",
          "20",
          "22",
          "11",
          "13",
          "6",
          "5",
          "2",
          "0",
          "12",
          "3",
          "7",
        ]),
      ];
      const actual = TestBingoGame.boards;
      expect(actual).toEqual(expected);
    });
  });

  describe("BingoBoard class", () => {
    let Board;
    beforeEach(() => {
      Board = new BingoBoard(
        "14 21 17 24  4 10 16 15  9 19 18  8 23 26 20 22 11 13  6  5 2  0 12  3  7"
          .split(" ")
          .filter((s) => s !== "")
          .map((s) => s.trim())
      );
    });

    it("can mark a spot", () => {
      Board.markBoard("14");
      expect(Board.markedIndices).toEqual([0]);
      expect(Board.victoryConditions).toEqual([
        ["21", "17", "24", "4"],
        ["10", "16", "15", "9", "19"],
        ["18", "8", "23", "26", "20"],
        ["22", "11", "13", "6", "5"],
        ["2", "0", "12", "3", "7"],
        ["10", "18", "22", "2"],
        ["21", "16", "8", "11", "0"],
        ["17", "15", "23", "13", "12"],
        ["24", "9", "26", "6", "3"],
        ["4", "19", "20", "5", "7"],
      ]);
    });

    describe("winning", () => {
      let WinningBoard;
      beforeAll(() => {
        WinningBoard = new BingoBoard(
          "14 21 17 24 4 10 16 15  9 19 18  8 23 26 20 22 11 13 6 5 2 0 12 3 7"
            .split(" ")
            .filter((s) => s !== "")
            .map((s) => s.trim())
        );

        const calledNumbers =
          "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1".split(
            ","
          );

        for (const num of calledNumbers) {
          WinningBoard.takeTurn(num);
        }
      });

      it("can detect a horizontal win", () => {
        expect(WinningBoard.won).toEqual(true);
      });

      it("can return its winning turn", () => {
        console.log(WinningBoard);
        const expected = 12;
        const actual = WinningBoard.calledNumbers.length;
        expect(actual).toEqual(expected);
      });

      it("can sum up a winning board", () => {
        const expected = 188;
        const actual = WinningBoard.winningSum;
        expect(actual).toEqual(expected);
      });

      it("can score a winning board", () => {
        const expected = 4512;
        const actual = WinningBoard.score;
        expect(actual).toEqual(expected);
      });
    });
  });

  describe("BingoGame class", () => {
    it("can identify the first winning board", () => {
      const expected = 2;
      TestBingoGame.run();
      const actual = TestBingoGame.winningBoardIndices[0];
      expect(actual).toEqual(expected);
    });
  });
});
