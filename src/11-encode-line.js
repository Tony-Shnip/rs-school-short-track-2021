/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const set = new Set();
  const ans = [];
  let k = 0;
  for (let i = 0; i < str.length; i++) {
    set.add(str[i]);
  }
  set.forEach((elem) => {
    for (let i = 0; i < str.length; i++) {
      if (elem === str[i]) k++;
    }
    if (k !== 1) ans.push(String(k).concat(elem));
    else ans.push(elem);
    k = 0;
  });
  return ans.join('');
}

module.exports = encodeLine;
