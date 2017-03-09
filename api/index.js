var languages = require('./languages');
var express = require('express');

var router = express.Router();

router.get('/languages', languages);

module.exports = router;
