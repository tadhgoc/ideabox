"use strict"
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'VzuHqyyEKNaXcuiyP1D1HOd4V',
  consumer_secret: 'dCo8ENNnX4D9wLMGo1n4VfWdbC4MQ1sn3z4g0OrYZ1zL8lMsNq',
  access_token_key: '839955319635628033-9LD9YSKjLp0Jo3PwL1hSTI0d3Nk6x5N',
  access_token_secret: 'kZ9mwaPRDEDdngMKOGKV6FMqoZuODurmYYFeP52NbUt64'
});


module.exports = (req, res, next) => {
  const params = req.query;
  params.q = `"${params.q}" filter:safe :)`
  client.get('search/tweets', params, function(error, tweets, response) {
    if(error) return;

    if(tweets.statuses.length === 0) {
      params.q = '#fail filter:safe :) filter:twimg';
      client.get('search/tweets', params, function(error, tweets, response) {
        if(error) return;

        res.json({isFail: true, tweets: tweets.statuses.map(status => status.id_str)});
      });
    } else {
      res.json({isFail: false, tweets: tweets.statuses.map(status => status.id_str)});
    }
  });
}
