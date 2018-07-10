const isEqual = require("../dayOne/isEqual");

describe("this is equal comparision", () => {
  test("comparision expected false", () => {
    expect(isEqual([1, 2], [])).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isEqual(1, "")).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isEqual([1, 2, 3], { nama: "aji" })).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isEqual([1, 2, 3, 4], [1, 2, 3])).toBe(false);
  });
  test("comparision expected false", () => {
    expect(
      isEqual(
        { type: "Fiat", model: [100, 100], color: "white" },
        { type: "Fiat", color: "white", model: [100, 100], age: 11 }
      )
    ).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isEqual([null], null)).toBe(false);
  });
  test("comparision expected false", () => {
    expect(isEqual(undefined, [undefined])).toBe(false);
  });
  test("comparision expected true", () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test("comparision expected true", () => {
    expect(
      isEqual(
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
    expect(isEqual(null, null)).toBe(true);
  });
  test("comparision expected true", () => {
    expect(isEqual(1, 1)).toBe(true);
  });
});
