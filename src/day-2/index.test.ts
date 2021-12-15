import Submarine from "./Submarine";
import AimSubmarine from "./AimSubmarine";
import { getValsFromFile } from "../utils";
import { moveSubmarine } from "./index";

describe("day 2", () => {
  describe("Submarine class", () => {
    let testSub;

    beforeEach(() => {
      testSub = new Submarine();
    });

    it("can extract a direction and a value from a step string", () => {
      const step = "forward 5";
      const actual = testSub.extractDirAndVal(step);
      const expected = ["forward", 5];
      expect(actual).toEqual(expected);
    });

    const directionTestCases = [
      {
        direction: "forward",
        val: 5,
        expectedHorizPos: 5,
        expecteddepth: 0,
      },
      {
        direction: "down",
        val: 5,
        expectedHorizPos: 0,
        expecteddepth: 5,
      },
      {
        direction: "up",
        val: 3,
        expectedHorizPos: 0,
        expecteddepth: -3,
      },
    ];

    directionTestCases.forEach(
      ({ direction, val, expectedHorizPos, expecteddepth }) => {
        it(`can calculate a ${direction} movement`, () => {
          testSub[direction](val);
          expect(testSub.horizPos).toEqual(expectedHorizPos);
          expect(testSub.depth).toEqual(expecteddepth);
        });
      }
    );
  });

  it("calculates the correct answer for Submarine", async () => {
    const actual = moveSubmarine(
      await getValsFromFile("./day-2/test-input.txt"),
      new Submarine()
    );
    const expected = 150;
    expect(actual).toEqual(expected);
  });

  it("calculates the correct answer for AimSubmarine", async () => {
    const actual = moveSubmarine(
      await getValsFromFile("./day-2/test-input.txt"),
      new AimSubmarine()
    );
    const expected = 900;
    expect(actual).toEqual(expected);
  });
});
