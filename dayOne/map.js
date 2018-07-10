function map(array, fn) {
  let result = [];
  for (let iterator of array) {
    result.push(fn(iterator));
  }
  return result;
}
module.exports = map;
