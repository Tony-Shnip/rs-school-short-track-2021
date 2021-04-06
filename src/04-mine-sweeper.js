/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let ans = [];
  ans = matrix;
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[0].length; j++) {
      if (matrix[i][j] === false) {
        ans[i][j] = 0;
        if (i > 0 && j > 0) {
          if (matrix[i - 1][j - 1] === true) ans[i][j]++;
        }
        if (i > 0) {
          if (matrix[i - 1][j] === true) ans[i][j]++;
        }
        if (i > 0 && j < ans[0].length - 1) {
          if (matrix[i - 1][j + 1] === true) ans[i][j]++;
        }
        if (j > 0) {
          if (matrix[i][j - 1] === true) ans[i][j]++;
        }
        if (j < ans[0].length - 1) {
          if (matrix[i][j + 1] === true) ans[i][j]++;
        }
        if (i < ans.length - 1 && j > 0) {
          if (matrix[i + 1][j - 1] === true) ans[i][j]++;
        }
        if (i < ans.length - 1) {
          if (matrix[i + 1][j] === true) ans[i][j]++;
        }
        if (i < ans.length - 1 && j < ans[0].length - 1) {
          if (matrix[i + 1][j + 1] === true) ans[i][j]++;
        }
      }
    }
  }
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[0].length; j++) {
      if (matrix[i][j] === true) ans[i][j] = 1;
    }
  }
  return ans;
}

module.exports = minesweeper;
