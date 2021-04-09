/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const ans = names;
  let test = [];
  let k = 0;
  let cic = true;
  while (cic) {
    cic = false;
    for (let i = 0; i < names.length; i++) {
      if (names.indexOf(ans[i], i + 1) !== -1) {
        test.push(ans[i]);
        cic = true;
      }
    }
    for (let i = 0; i < test.length; i++) {
      k = 0;
      for (let j = 0; j < ans.length; j++) {
        if (ans[j] === test[i]) {
          if (k !== 0) ans[j] = ans[j].concat('(', String(k), ')');
          k++;
        }
      }
    }
    test = [];
  }
  return ans;
}

module.exports = renameFiles;
