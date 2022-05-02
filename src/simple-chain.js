const { AssertionError } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value || value === null || value !== 0) {
      this.chain.push(`( ${value} )`);
    } else if (value === 0) {
      this.chain.push('( 0 )');
    } else {
      this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (
        !isNumber(position) ||
        position > this.getLength() ||
        !this.chain[position - 1]) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    const first = this.chain.slice(0, position - 1);
    const second = this.chain.slice(position);

    this.chain = first.concat(second);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];

    return result;    
  }
};

module.exports = {
  chainMaker
};
