
// You should implement your task here.

module.exports = function towelSort (matrix) {
  result = [];

  if (!matrix) {
    return result;
  } else {
    matrix.forEach((value, i) => {
      if (i % 2 === 0) {
        result.push(...value);
      } else {
        tempValue = value.reverse()
        result.push(...tempValue);
      }
    })
  }
  return result;
}
