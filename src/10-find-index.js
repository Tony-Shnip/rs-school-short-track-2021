/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, v) {
  let l = 0;
  let r = arr.length - 1;
  for (let i = 0; i < 20; i++) {
    if (arr[l + Math.floor((r - l) / 2)] === v) return l + Math.floor((r - l) / 2);
    if (arr[r] === v) return r;
    if (arr[l + Math.floor((r - l) / 2)] > v) r = l + Math.floor((r - l) / 2);
    else l += Math.floor((r - l) / 2);
  }
  return l + Math.floor((r - l) / 2);
}

module.exports = findIndex;
