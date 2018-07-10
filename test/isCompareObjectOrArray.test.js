const isCompareObjectOrArray = require("../dayOne/isEqual");

describe("this is equal comparision", () => {
  test("comparision expected false", () => {
    expect(isCompareObjectOrArray([1, 2], [])).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isCompareObjectOrArray(1, "")).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isCompareObjectOrArray([1, 2, 3], { nama: "aji" })).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isCompareObjectOrArray([1, 2, 3, 4], [1, 2, 3])).toBe(false);
  });
  test("comparision expected false", () => {
    expect(
      isCompareObjectOrArray(
        { type: "Fiat", model: [100, 100], color: "white" },
        { type: "Fiat", color: "white", model: [100, 100], age: 11 }
      )
    ).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isCompareObjectOrArray([null], null)).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isCompareObjectOrArray(undefined, [undefined])).toBe(false);
  });
  test("comparision expected true", () => {
    expect(isCompareObjectOrArray([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test("comparision expected true", () => {
    expect(
      isCompareObjectOrArray(
        {
          type: "Fiat",
          model: [100, 100],
          color: "white",
          age: 40,
          identity: { address: "ox", ages: 10 }
        },
        {
          type: "Fiat",
          identity: { ages: 10, address: "ox" },
          color: "white",
          model: [100, 100],
          age: 40
        }
      )
    ).toBe(true);
  });
  test("comparision expected true", () => {
    expect(isCompareObjectOrArray(null, null)).toBe(true);
  });
  test("comparision expected true", () => {
    expect(isCompareObjectOrArray(1, 1)).toBe(true);
  });
  expect(
    isCompareObjectOrArray(
      [1, 2, { age: 10, sex: "man" }],
      [1, 2, { sex: "man", age: 10 }]
    )
  ).toBe(true);
  expect(
    isCompareObjectOrArray(
      [1, 2, { age: 10, sex: "man" }, 5],
      [1, 2, { sex: "man", age: 10 }, 6]
    )
  ).toBe(false);
  expect(
    isCompareObjectOrArray(
      [1, 2, { age: 10, sex: "man" }, [1, 2, { age: 10, sex: "man" }, 5]],
      [1, 2, { sex: "man", age: 10 }, [1, 2, { age: 10, sex: "man" }, 5]]
    )
  ).toBe(true);
});
