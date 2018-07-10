function double(array) {
  let result = [];
  for (let iterator of array) {
    result.push(iterator * 2);
  }
  return result;
}
module.exports = double;
