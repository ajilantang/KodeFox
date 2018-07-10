function isEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  //array comparasion
  else if (Array.isArray(a) && Array.isArray(b)) {
    return isCompareArray(a, b);
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

  return false;
}

function isCompareArray(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  let matchElmentOnArray = arrayOne.filter((value, index) =>
    isEqual(value, arrayTwo[index])
  );
  return arrayOne.join(",") === matchElmentOnArray.join(",");
}

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
module.exports = isCompareArray;
