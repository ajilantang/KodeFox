const map = require("../dayOne/map");

describe("its map array ", () => {
  let array = [2, 4, 6, 8];
  test("given fn := (x) => x+1 , [3,5,7,9] ", () => {
    expect(map(array, x => x + 1)).toEqual([3, 5, 7, 9]);
  });
  test("given fn := (x) => x*x , its would return  [4,16,,10]", () => {
    expect(map(array, x => x * x)).toEqual([4, 16, 36, 64]);
  });
});
