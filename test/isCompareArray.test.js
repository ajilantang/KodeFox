const isCompareArray = require("../dayTwo/isCompareArray");

it("compare two different array  shoould return false", () => {
  expect(
    isCompareArray(
      [1, 2, { age: 10, sex: "man" }],
      [1, 2, { sex: "man", age: 10 }]
    )
  ).toBe(true);
  expect(
    isCompareArray(
      [1, 2, { age: 10, sex: "man" }, 5],
      [1, 2, { sex: "man", age: 10 }, 6]
    )
  ).toBe(false);
  expect(
    isCompareArray(
      [1, 2, { age: 10, sex: "man" }, [1, 2, { age: 10, sex: "man" }, 5]],
      [1, 2, { sex: "man", age: 10 }, [1, 2, { age: 10, sex: "man" }, 5]]
    )
  ).toBe(true);
});
