/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = {};
  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.').reverse();
    while (domain.length > 0) {
      const d = '.'.concat(domain.join('.'));
      if (Object.keys(map).includes(d)) {
        map[d] += 1;
      } else {
        map[d] = 1;
      }
      domain.pop();
    }
  }
  return map;
}

module.exports = getDNSStats;
