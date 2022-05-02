const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
  	result[i] = new Array(matrix[i].length).fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {

        // left
        if (j > 0) {
          result[i][j - 1] += 1;
        }

        //up-left

        if (j > 0 && i > 0) {
          result[i - 1][j - 1] += 1;
        }

        //up
        if (i > 0) {
          result[i - 1][j] += 1;
        }

        //up-right

        if (j < matrix[i].length - 1 && i > 0) {
          result[i - 1][j + 1] += 1;
        }

        //right
        if (j < matrix[i].length - 1) {
          result[i][j + 1] += 1;
        }

        //down-right
        if (i < matrix.length - 1 && j < matrix[i].length - 1) {
          result[i + 1][j + 1] += 1;
        }

        //down
        if (i < matrix.length - 1) {
          result[i + 1][j] += 1;
        }

        //down-left
        if (i < matrix.length - 1 && j > 0) {
          result[i + 1][j - 1] += 1;
        }

      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
