import { getValsFromFile } from "../utils";

(async () => {
  const steps = await getValsFromFile("./day-2/input.txt");
  console.log("Day 2: ", steps);
})();
