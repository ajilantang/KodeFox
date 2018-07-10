function isEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  //array comparasion
  else if (Array.isArray(a) || Array.isArray(b)) {
    return isArrayEqual(a, b);
  }
  //null && primitif comparasion
  else if (
    a === null ||
    b === null ||
    typeof a === "string" ||
    typeof a === "number" ||
    typeof a == "undefined"
  ) {
    return isPrimitifCompare(a, b);
  }
  //object comparasion
  else if (typeof a === "object") {
    return isObjectCompare(a, b);
  }
}

let isArrayEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

let isObjectCompare = (objectOne, objectTwo) => {
  let isKeyOfObject =
    Object.keys(objectOne).length === Object.keys(objectTwo).length;
  if (isKeyOfObject) {
    for (let value of Object.keys(objectOne)) {
      if (!isEqual(objectOne[value], objectTwo[value])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

let isPrimitifCompare = (a, b) => a === b;
// test

//false
console.log("false =====> ");
console.log(isEqual({ type: "Fiat", model: [100, 100], color: "white" }, null));
console.log(isEqual([1, 2], []));
console.log(isEqual(1, ""));
console.log(isEqual([1, 2, 3], { nama: "aji" }));
console.log(isEqual([1, 2, 3, 4], [1, 2, 3]));
console.log(isEqual([1, 2, 3], [3, 1, 2]));
console.log(isEqual(null, undefined));
console.log(
  isEqual(
    { type: "Fiat", model: [100, 100], color: "white" },
    { type: "Fiat", color: "white", model: [100, 100], age: 11 }
  )
);
// true
console.log("----------------------------------");
console.log("true ======> ");
console.log(isEqual([1, 2, 3], [1, 2, 3]));
console.log(
  isEqual(
    { type: "Fiat", model: [100, 100], color: "white" },
    { type: "Fiat", model: [100, 100], color: "white" }
  )
);
console.log(
  isEqual(
    { type: "Fiat", model: [100, 100], color: "white", age: 40 },
    { type: "Fiat", color: "white", model: [100, 100], age: 40 }
  )
);
console.log(isEqual(1, 1));
console.log(isEqual(null, null));
// true
