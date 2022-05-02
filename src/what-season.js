const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }

  if (date instanceof Date) {
    if (date.getMonth() > 1 && date.getMonth() < 5) {
      return 'spring';
    } else if (date.getMonth() > 4 && date.getMonth() < 8) {
      return 'summer';
    } else if (date.getMonth() > 7 && date.getMonth() < 11) {
      return 'autumn';
    } else {
      return 'winter';
    }

  } 

  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
