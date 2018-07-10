const double = require("../dayOne/double");

describe("its doubling array ", () => {
  test("expected [2,4,6]", () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
  });
  test("expected [4,5,10]", () => {
    expect(double([2, 2.5, 5])).toEqual([4, 5, 10]);
  });
});
