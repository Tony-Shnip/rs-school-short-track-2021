/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -10000;
  const test = String(n);
  let cur = [];
  const l = test.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (j !== i) cur.push(test[j]);
    }
    if (Number(cur.join('')) > max) max = Number(cur.join(''));
    cur = [];
  }
  return max;
}

module.exports = deleteDigit;
