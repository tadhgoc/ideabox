"use strict"
const words = require("../utils/computer-nouns");
const crypto = require('crypto');


module.exports = (req, res, next) => {
  const word = getRandomWord();

  res.json(word);
}


function getRandomWord() {
    const index = parseInt(Math.random() * (words.length - 0));
    return words[index];
}


function getRandomWord_draw() {
    console.log('getRandomWord');
    try {
      const maxIndex = words.length-1;
      console.log('maxIndex', maxIndex);
      const maxBytes = 6;
      const maxDecimal = Math.pow(256, maxBytes);
      console.log('maxDecimal', maxDecimal);

      const randomBytes = parseInt(crypto.randomBytes(maxIndex).toString('hex'), 16);
      console.log('randomBytes', randomBytes);
      const randomIndex = Math.floor(randomBytes/ maxDecimal*(maxIndex+1));

      console.log('randomIndex', randomIndex);
      return words[randomIndex];
    } catch (err) {
      console.log(err);
    }
}
