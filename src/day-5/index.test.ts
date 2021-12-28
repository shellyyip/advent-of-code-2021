import { type Coordinate, getLineSegments,listPointsForLineSegment, coordToStringKey, stringKeyToCoord,mapPoints, countPointFrequency, getAnswer } from "./index";

describe("day 5", () => {
    it('can generate a list of line segments from a string', () => {
        const testString = `9,4 -> 3,4
2,2 -> 2,1`
        const expected = [[[9,4], [3,4]], [[2,2], [2,1]]]
        expect(getLineSegments(testString)).toEqual(expected)
    })

  it("can generate a list of points that a line segment covers", () => {
    const actual = listPointsForLineSegment([0, 9], [5, 9]);
    const expected = [
      [0, 9],
      [1, 9],
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
    ];
    expect(actual).toEqual(expected);
  });

  describe("points map", () => {
    const testMap = new Map<string, number>([
      [coordToStringKey([0, 9]), 1],
      [coordToStringKey([1, 9]), 2],
      [coordToStringKey([2, 9]), 1],
    ]);

      it('can stringify a coord', () => {
        expect(coordToStringKey([0,1])).toEqual('[0,1]')
      })

      it('can convert a string key to coord', () => {
          expect(stringKeyToCoord('[0,1]')).toEqual([0,1])
      })

    it("can create a map of points", () => {
      const actual = mapPoints(
        [
          [0, 9],
          [1, 9],
        ],
        [
          [1, 9],
          [2, 9],
        ]
      );

      expect(actual).toEqual(testMap);
    });

    it("can count points with more than 1 occurrence", () => {
      const actual = countPointFrequency(testMap, 2);
      expect(actual).toEqual(1);
    });
  });

  it("can output the correct answer", async () => {
    const actual = await getAnswer('./day-5/test-input.txt');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
});
