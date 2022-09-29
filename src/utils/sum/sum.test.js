import { sum } from "./sum";

describe("Sum function", () => {
  it("should return the sum", () => {
    const value = sum(4, 5);

    expect(value).toBe(2);
  });
});
