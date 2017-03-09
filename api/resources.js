"use strict"
const resources = require("../utils/resources");

module.exports = (req, res, next) => {
  const language = req.query.lang;

  res.json(resources[language]);
}
