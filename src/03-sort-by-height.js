/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const test = [];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) test.push(arr[i]);
  }
  test.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) ans.push(-1);
    else ans.push(test.shift());
  }
  return ans;
}

module.exports = sortByHeight;
