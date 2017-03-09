"use strict"
const words = require("../utils/computer-nouns");
const trending = require('trending-github');
const _ = require('lodash')


module.exports = (req, res, next) => {
  getRandomLanguage()
  .then((language) => {
    console.log('then', language);
    const word = getRandomWord();
    res.json({
      word,
      language
    });
  });
}

function getRandomWord() {
  const index = parseInt(Math.random() * words.length);
  return words[index];
}

function getRandomLanguage() {
  return trending()
  .then(repos => {
      let languages = []
      const languagesWithNumber = _.countBy(repos, repo => repo.language);

      _.forOwn(languagesWithNumber, (count, language) => {
        if (language !== '') {
          languages.push(language);
        }
      });

      const index = parseInt(Math.random() * languages.length);
      return languages[index];
  });
}

// function getRandomLanguage() {
//   console.log('getRandomLanguage');
//   return trending()
//   .then(repos => {
//       console.log('getRandomLanguage then');
//       let languages = []
//       const languagesWithNumber = _.countBy(repos, repo => repo.language);

//       _.forOwn(languagesWithNumber, (count, language) => {
//         if (language !== '') {
//           languages.push(language);
//         }
//       });
//   });
// }
