import Submarine from "./index";

describe("day 2", () => {
  let testSub;

  beforeEach(() => {
    testSub = new Submarine();
  });

  it("can calculate a forward movement", () => {
    testSub.forward(5);
    expect(testSub.horizontalPos).toEqual(5);
    expect(testSub.depthPos).toEqual(0);
  });
});
