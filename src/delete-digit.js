const { NotImplementedError } = require('../extensions/index.js');

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
  let stringNum = `${n}`;
  let nums = [];

  for (let i = 0; i < stringNum.length; i++) {
    nums.push(
      stringNum.slice(0,i) + stringNum.slice(i+1,stringNum.length)
    );
  }

  return Math.max(...nums);
}

module.exports = {
  deleteDigit
};
