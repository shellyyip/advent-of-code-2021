interface Submarine {
  horizPos: number;
  depth: number;
}

const validDirections = ["forward", "down", "up"] as const;
type Direction = typeof validDirections[number];

class Submarine implements Submarine {
  constructor() {
    this.horizPos = 0;
    this.depth = 0;
  }

  isOfTypeDirection(maybeDir: string | Direction): maybeDir is Direction {
    return validDirections.includes(maybeDir as Direction);
  }

  extractDirAndVal(step: string): [Direction, number] {
    const [dir, val] = step.split(" ");
    return [dir as Direction, parseInt(val)];
  }

  forward(val: number): void {
    this.horizPos += val;
  }

  down(val: number) {
    this.depth += val;
  }

  up(val: number) {
    this.depth -= val;
  }
}

export default Submarine;
