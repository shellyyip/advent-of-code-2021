import Submarine from "./Submarine";

interface AimSubmarine extends Submarine {
  aim: number;
}

class AimSubmarine extends Submarine {
  constructor() {
    super();
    this.aim = 0;
  }

  forward(val: number) {
    this.horizPos += val;
    this.depth += this.aim * val;
  }

  down(val: number) {
    this.aim += val;
  }

  up(val: number) {
    this.aim -= val;
  }
}
export default AimSubmarine;
