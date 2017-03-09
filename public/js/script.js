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
  result = "Use <span class='keyword'>" + data.language + "</span> to make <span class='keyword'>" + data.word + "</span>";
  console.log(result);

  $(".idea-text").html(result);

  $('.tweets').append("How hot is <span class='keyword'>" + data.word + "</span>? Check out these tweets:");
  buildTweet(data.word, '/api/twitter?count=3&q=');

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
  $('.idea-expand').removeClass("hidden");
  $('.idea-expand').addClass("on");
  $('.idea').hide();

  var expIdea = document.getElementById("idea-expand");
  expIdea.addEventListener("webkitAnimationEnd", showIdeaText);
}



function showIdeaText() {
  $('.idea-text').removeClass('hidden');
  $('.tweets').removeClass('hidden');

}
