$(function() {
  getData('/api/randomise');
  // $('.idea-text').hide();
});

function getData (api) {
    fetch(api, {
        method: 'GET'
    })
    .then(function (res) {
        res.json()
        .then(function (json) {
          console.log(json);
          buildString(json);
        });
    }).catch(function (err) {
        console.error(err)
    });
}

function buildString(data) {
  result = "Use " + data.language + " to make " + data.word;
  console.log(result);

  $(".idea-text").text(result);

  buildTweet(data.word, '/api/twitter?q=');
}

function buildTweet(word, api) {
  api = api + word;
  console.log(api);

  fetch(api, {
      method: 'GET'
  })
  .then(function (res) {
      res.json()
      .then(function (json) {
        $.each(json, function(index, tweetId){
          $('.tweets').append("<div id='tweet" + index + "'></div>");
          var id = tweetId.toString();
          console.log(id);
          makeTweet(index, id);
        });
      });
  }).catch(function (err) {
      console.error(err)
  });
}
function makeTweet(index, id) {
  var css = 'tweet' + index;
  twttr.widgets.createTweet(
    id,
    document.getElementById(css),
    {
      theme: 'light'
    }
  );
}

function tog() {
  $('.box').addClass("shake");
  $('.idea').removeClass('hidden');
  $('.idea').addClass("fly");
  $('.button').addClass("hidden");
}

function showIdea() {
  console.log("called show idea");
  $('.idea-expand').removeClass("hidden");
  $('.idea-expand').addClass("on");
  $('.idea').hide();

  var expIdea = document.getElementById("idea-expand");
  expIdea.addEventListener("webkitAnimationEnd", showIdeaText);
}



function showIdeaText() {
  $('.idea-text').removeClass('hidden');

}
