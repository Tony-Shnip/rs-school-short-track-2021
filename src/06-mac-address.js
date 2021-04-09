/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let test = n;
  if (test.length !== 17) return false;
  if (test[2] !== '-' || test[5] !== '-' || test[8] !== '-' || test[11] !== '-' || test[14] !== '-') return false;
  test = test.replace(/[A-Z0-9]/g, '');
  if (test !== '-----') return false;
  return true;
}

module.exports = isMAC48Address;
