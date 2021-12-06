import { getAnswer } from "./index";

describe("Day one", () => {
  it("can run tests", () => {
    expect(true).toBe(true);
  });

  it("generates the correct answer for test input", () => {
    expect(getAnswer()).toEqual(7);
  });
});
