import { getValsFromFile } from "../utils";
import AimSubmarine from "./AimSubmarine";
import Submarine from "./Submarine";

export const moveSubmarine = (
  steps: string[],
  Sub: Submarine | AimSubmarine
) => {
  steps.forEach((step) => {
    const [dir, val] = Sub.extractDirAndVal(step);
    Sub[dir](val);
  });
  return Sub.horizPos * Sub.depth;
};

(async () => {
  console.log(
    "Day 2 Part 1: ",
    moveSubmarine(await getValsFromFile("./day-2/input.txt"), new Submarine())
  );

  console.log(
    "Day 2 Part 2: ",
    moveSubmarine(
      await getValsFromFile("./day-2/input.txt"),
      new AimSubmarine()
    )
  );
})();
