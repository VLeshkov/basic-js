const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};

  for (let domain of domains) {
    const splittedDomain = domain.split('.');
    let currentDomain = '';

    for (let i = splittedDomain.length - 1; i >= 0; i--) {
      currentDomain = currentDomain + '.' + splittedDomain[i];

      if (!result[currentDomain]) {
        result[currentDomain] = 1;
      } else {
        result[currentDomain] += 1;
      }
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
