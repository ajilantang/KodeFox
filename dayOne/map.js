function map(array, fn) {
  let result = [];
  for (let iterator of array) {
    result.push(fn(iterator));
  }
  return result;
}

console.log(map([1, 2, 3], num => num + 2));
