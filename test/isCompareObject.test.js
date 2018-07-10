const isCompareObject = require("../dayTwo/isCompareObject");
test("comparision expected true", () => {
  expect(
    isCompareObject(
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
  expect(
    isCompareObject(
      {
        type: "Fiat",
        model: [100, 100],
        backGround: { color: "white", sketch: "snoopy" },
        age: 40,
        identity: {
          address: "ox",
          ages: 10,
          backGround: { color: "white", sketch: "snoopy" }
        }
      },
      {
        type: "Fiat",
        identity: {
          ages: 10,
          address: "ox",
          backGround: { color: "white", sketch: "snoopy" }
        },
        backGround: { sketch: "snoopy", color: "white" },
        model: [100, 100],
        age: 40
      }
    )
  ).toBe(true);
  expect(
    isCompareObject(
      {
        type: "Fiat",
        model: [100, 100],
        backGround: { color: "white", sketch: "snoopy" },
        age: 40,
        identity: {
          address: "ox",
          ages: 10,
          backGround: { color: "white", sketch: "snoopy" }
        }
      },
      {
        type: "Fiat",
        identity: {
          ages: 10,
          address: "ox",
          backGround: { color: "black", sketch: "snoopy" }
        },
        backGround: { sketch: "snoopy", color: "white" },
        model: [100, 100],
        age: 40
      }
    )
  ).toBe(false);
});
