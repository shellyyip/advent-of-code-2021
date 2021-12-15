import { getValsFromFile } from "../utils";
import Submarine from "./Submarine";

export const moveSubmarine = (steps: string[]) => {
  const Sub = new Submarine();

  steps.forEach((step) => {
    const [dir, val] = Sub.extractDirAndVal(step);
    Sub[dir](val);
  });
  return Sub.horizPos * Sub.depthPos;
};

(async () => {
  console.log(
    "Day 2 Part 1: ",
    moveSubmarine(await getValsFromFile("./day-2/input.txt"))
  );
})();
