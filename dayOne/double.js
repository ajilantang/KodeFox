function double(array) {
  let result = [];
  for (let iterator of array) {
    result.push(iterator * 2);
  }
  return result;
}

console.log(double([1, 2, 3, 4]), "return [2, 4, 6, 8]");
