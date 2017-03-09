"use strict"
const resources = require("../utils/resources");

module.exports = (req, res, next) => {
  const language = req.query.lang.toLowerCase();
  console.log('language', `>>${encodeURIComponent(language)}<<`);

  let resource = resources[language];
  if(resource === undefined) {
    resource = `https://www.google.com.au/search?q=${encodeURIComponent(language)}`;
  }

  res.json(resource);
}
