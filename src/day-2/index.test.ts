import Submarine from "./Submarine";
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
        expectedDepthPos: 0,
      },
      {
        direction: "down",
        val: 5,
        expectedHorizPos: 0,
        expectedDepthPos: 5,
      },
      {
        direction: "up",
        val: 3,
        expectedHorizPos: 0,
        expectedDepthPos: -3,
      },
    ];

    directionTestCases.forEach(
      ({ direction, val, expectedHorizPos, expectedDepthPos }) => {
        it(`can calculate a ${direction} movement`, () => {
          testSub[direction](val);
          expect(testSub.horizPos).toEqual(expectedHorizPos);
          expect(testSub.depthPos).toEqual(expectedDepthPos);
        });
      }
    );
  });

  it("calculates the correct answer", async () => {
    const actual = moveSubmarine(
      await getValsFromFile("./day-2/test-input.txt")
    );
    const expected = 150;
    expect(actual).toEqual(expected);
  });
});
