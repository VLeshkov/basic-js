const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let usedChars = [];
  let result = 0;

  for (let letter of s1) {
    if (!usedChars.includes(letter)) {
      usedChars.push(letter);

      let s1Count = s1.split('').filter(s => s === letter).length;
      let s2Count = s2.split('').filter(s => s === letter).length;

      result += (s1Count <= s2Count) ? s1Count : s2Count;
    }    
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
