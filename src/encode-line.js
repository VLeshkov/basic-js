const { NotImplementedError } = require('../extensions/index.js');

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

function formatLetter(count, letter) {
  if (count > 1) {
    return count + letter;
  } else {
    return letter;
  }
}

function encodeLine(str) {
  if (str.length === 0) {
    return str;
  }

  let result = [];
  let letter = str[0];
  let letterCount = 1;

  if (str.length > 1) {
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== letter) {
        result.push(formatLetter(letterCount, letter));
        letter = str[i];
        letterCount = 1;
      } else if (i === str.length - 1) {
        letterCount++;
      } else {
        letterCount++;
      }
    }
  } 
  
  result.push(formatLetter(letterCount, letter));

  return result.join('');
}

module.exports = {
  encodeLine
};
