
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (arguments.length < 1) {
    return []
  } else {
    for (i = 0; i < matrix.length; i++) {
    if (i % 2 == 1) {
      matrix[i].sort((a, b) => b - a)
      }
    } return matrix.flat()
  }
}
