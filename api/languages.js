"use strict"
const trending = require('trending-github');
const _ = require('lodash')


module.exports = (req, res, next) => {
  trending()
  .then(repos => {
      let languages = []
      const languagesWithNumber = _.countBy(repos, repo => repo.language);

      _.forOwn(languagesWithNumber, (count, language) => {
        if (language !== '') {
          languages.push(language);
        }
      });

      res.json(languages);
  });
}
