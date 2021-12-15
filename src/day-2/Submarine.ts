interface Submarine {
  horizPos: number;
  depthPos: number;
}

const validDirections = ["forward", "down", "up"] as const;
type Direction = typeof validDirections[number];

class Submarine implements Submarine {
  constructor() {
    this.horizPos = 0;
    this.depthPos = 0;
    //this["forward"] = this.forward.bind(this);
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
    this.depthPos += val;
  }

  up(val: number) {
    this.depthPos -= val;
  }
}
export default Submarine;
