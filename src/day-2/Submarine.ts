interface Submarine {
  horizPos: number;
  depthPos: number;
}

class Submarine implements Submarine {
  constructor() {
    this.horizPos = 0;
    this.depthPos = 0;
  }

  extractDirAndVal(step: string): [string, number] {
    const stepTuple = step.split(" ");
    return [stepTuple[0], parseInt(stepTuple[1])];
  }

  forward(val: number) {
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
