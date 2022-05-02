const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

 function createTable(alphabet) {
   let result = [];
   for (let i = 0; i < alphabet.length; i++) {
     const first = alphabet.split('').slice(0, i);
     const second = alphabet.split('').slice(i, alphabet.length);

     result.push(second.join('') + first.join(''));
   }

   return result;
 }

 function findIndex(alphabet, letter) {
   return alphabet.indexOf(letter);
 }

 function createKeyString(key, string) {
   let keyIndex = 0;
   let result = [];

   for (let i = 0; i < string.length; i++) {
     if (string[i].match(/[a-z]/i)) {
       if (keyIndex < key.length - 1) {
         result.push(key[keyIndex]);
         keyIndex++;
       } else {
         result.push(key[keyIndex]);
         keyIndex = 0;
       }
     } 
     else {
       result.push(string[i]);
     }
   }

   return result.join('');
 }

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(...args) {
    if (args.length != 2 || args[0] === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let string = args[0]
    let key = args[1];

    const TABLE = createTable(ALPHABET);
    const KEY_STRING = createKeyString(key, string);

    let result = [];
    let keyStringIndex = 0;

    for (let i = 0; i < string.length; i++) {

      let letter = string[i].toUpperCase();
      let currentKey = KEY_STRING[keyStringIndex].toUpperCase();

      if (letter.match(/[a-z]/i)) {

      	let indexLetter = findIndex(TABLE[0], letter);
      	let indexKey = findIndex(TABLE[0], currentKey);

        result.push(TABLE[indexLetter][indexKey]);
        
        keyStringIndex++;
        
      } else {
        result.push(letter);
        keyStringIndex++;
      }
    }

    if (!this.direct) {
      return result.reverse().join('');
    }

    return result.join('');
  }
  decrypt(...args) {
    if (args.length != 2 || args[0] === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let string = args[0]
    let key = args[1];

    const TABLE = createTable(ALPHABET);
    const KEY_STRING = createKeyString(key, string);

    let result = [];
    let keyStringIndex = 0;

    for (let i = 0; i < string.length; i++) {

      let letter = string[i].toUpperCase();
      let currentKey = KEY_STRING[keyStringIndex].toUpperCase();

      if (letter.match(/[a-z]/i)) {

      	let indexKey = findIndex(TABLE[0], currentKey);
        let indexLetter = findIndex(TABLE[indexKey], letter);

        result.push(TABLE[0][indexLetter]);
        
        keyStringIndex++;
        
      } else {
        result.push(letter);
        keyStringIndex++;
      }
    }

    if (!this.direct) {
      return result.reverse().join('');
    }

    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
