interface Submarine {
  horizontalPos: number;
  depthPos: number;
}

class Submarine implements Submarine {
  constructor() {
    this.horizontalPos = 0;
    this.depthPos = 0;
  }

  forward(val) {
    this.horizontalPos += val;
  }
}
export default Submarine;
