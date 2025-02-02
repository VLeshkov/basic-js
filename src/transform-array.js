const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if ((arr instanceof Array) === false) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) {
     return arr;
  }

  result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i < arr.length - 1) {
      result.push(null);
      result.push(null);
      i++;
    } else if (arr[i] === '--discard-prev' && i > 0) {
      result[i - 1] = null;
    } else if (arr[i] === '--double-next' && i < arr.length - 1) {
      result.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && i > 0) {
      result.push(result[i - 1]);
    } else {
      result.push(arr[i]);
    }

    console.log(arr, '\n', result);
  }

  return result.filter(a => a != null && 
                         a != '--discard-next' &&
                         a != '--discard-prev' &&
                         a != '--double-next' &&
                         a != '--double-prev');
}

module.exports = {
  transform
};
