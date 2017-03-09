"use strict"
const words = require("../utils/computer-nouns");
const trending = require('trending-github');
const _ = require('lodash')


module.exports = (req, res, next) => {
  const language = getRandomLanguage()
  const word = getRandomWord();

  res.json({
    word,
    language
  });
}

function getRandomWord() {
  const index = parseInt(Math.random() * words.length);
  return words[index];
}


function getRandomLanguage() {
  getTrendingLanguages();

  if (trendingLanguages.length === 0) return 'JavaScript';

  const index = parseInt(Math.random() * trendingLanguages.length);
  return trendingLanguages[index];
}


let trendingLanguages = [];
let lastCheck = 0;
function getTrendingLanguages() {
  const millisecondsPerMinute = 60000;
  if (lastCheck > (Date.now() - millisecondsPerMinute)) return;

  lastCheck = Date.now();
  trending()
  .then(repos => {
    let languages = []
    let languagesWithNumber = _.countBy(repos, repo => repo.language);

    _.forOwn(languagesWithNumber, (count, language) => {
      if (language !== '') {
        languages.push(language);
      }
    });

    trendingLanguages = languages;
  });
}
