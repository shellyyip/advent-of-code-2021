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
        `22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19`
          .split(" ")
          .filter((s) => s !== ""),
        ` 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6`
          .split(" ")
          .filter((s) => s !== ""),
        `14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`
          .split(" ")
          .filter((s) => s !== ""),
      ];
      const actual = TestBingoGame.boards;
      expect(actual).toEqual(expected);
    });
  });

  describe("BingoBoard class", () => {
    let Board;
    beforeEach(() => {
      Board = new BingoBoard(
        `14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`
          .split(" ")
          .filter((s) => s !== "")
          .map((s) => s.trim())
      );
    });

    it("can mark a spot", () => {
      Board.markBoard("14");
      console.log(Board);
      expect(Board.markedIndices).toEqual([0]);
    });

    it("can detect a horizontal win", () => {
      const calledNumbers = "7,4,9,5,11,17,23,2,0,14,21,24".split(",");
      expect(Board.won).toEqual(true);
    });

    it.skip("can return its winning turn", () => {});
    it.skip("can sum up a winning board", () => {
      const expected = 188;
    });
    it.skip("can score a winning board", () => {
      const expected = 4512;
    });
  });
});
