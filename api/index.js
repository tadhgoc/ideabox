var languages = require('./languages');
var words = require('./words');
var randomise = require('./randomise');
var express = require('express');

var router = express.Router();

router.get('/languages', languages);
router.get('/words', words);
router.get('/randomise', randomise);

module.exports = router;
