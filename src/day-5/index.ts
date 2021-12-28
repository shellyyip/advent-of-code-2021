"use strict";

import { readFile } from "../utils";

export type Coordinate = [number, number];

export function getLineSegments(
  str: string,
  filterOutDiagonals: boolean = true
): [Coordinate, Coordinate][] {
  return str
    .split("\n")
    .map((s) => s.split(" -> "))
    .map(([x, y]) => [
      x.split(",").map((s) => parseInt(s)),
      y.split(",").map((s) => parseInt(s)),
    ])
    .filter((seg) => {
      const [[x1, y1], [x2, y2]] = seg;
      if (filterOutDiagonals) {
        return x1 === x2 || y1 === y2;
      }
      return seg;
    }) as [Coordinate, Coordinate][];
}

export function listPointsForLineSegment(
  startSeg: Coordinate,
  endSeg: Coordinate
): Coordinate[] {
  const result = [startSeg];
  let [startX, startY] = startSeg;
  let [endX, endY] = endSeg;

  let x = startX,
    y = startY;

  while (x !== endX || y !== endY) {
    if (x < endX) {
      x++;
    } else if (x > endX) {
      x--;
    }
    if (y < endY) {
      y++;
    } else if (y > endY) {
      y--;
    }
    result.push([x, y]);
  }

  return result;
}

export function coordToStringKey(coord: Coordinate): string {
  return JSON.stringify(coord);
}

export function stringKeyToCoord(str: string): Coordinate {
  return JSON.parse(str);
}

export function mapPoints(...args: Coordinate[][]) {
  const result = new Map();
  args
    .flatMap((x) => x)
    .forEach((coord) => {
      const key = coordToStringKey(coord);
      if (!result.has(key)) {
        result.set(key, 0);
      }
      result.set(key, result.get(key) + 1);
    });
  return result;
}

export function countPointFrequency(
  map: Map<string, number>,
  frequency: number
): number {
  let result = 0;
  map.forEach((val) => {
    if (val === frequency) {
      result++;
    }
  });
  return result;
}

export async function getAnswer(fileName) {
  const lineSegs = getLineSegments(await readFile(fileName));
  const allCoords = lineSegs.map(([start, end]) =>
    listPointsForLineSegment(start, end)
  );
  return countPointFrequency(mapPoints(...allCoords), 2);
}

(async function () {
  console.log("Day 5 part 1: ", await getAnswer("./day-5/input.txt"));
})();
