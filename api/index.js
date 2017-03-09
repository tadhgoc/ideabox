var languages = require('./languages');
var words = require('./words');
var randomise = require('./randomise');
var twitter = require('./twitter');
var resources = require('./resources');
var express = require('express');

var router = express.Router();

router.get('/languages', languages);
router.get('/words', words);
router.get('/randomise', randomise);
router.get('/twitter', twitter);
router.get('/resources', resources);

module.exports = router;
