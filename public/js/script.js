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

function buildResource(lang, api, fullName) {
  api = api + lang;

  fetch(api, {
      method: 'GET'
  })
  .then(function (res) {
      res.json()
      .then(function (link) {
        console.log(link, lang);
        $('.resources').append("Get started with <a href='" +link +"' target='_blank' rel='no-follow'>" +fullName+ "</a>");

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
  var lang = encodeURIComponent(data.language)
  buildResource(lang, 'api/resources?lang=', data.language);

}

function buildTweet(word, api) {
  api = api + word;

  fetch(api, {
      method: 'GET'
  })
  .then(function (res) {
      res.json()
      .then(function (json) {
        $.each(json, function(index, tweetId){
          $('.tweets').append("<div class='solo-tweet' id='tweet" + index + "'></div>");
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
  $('.idea-box').addClass("on");
  $('.idea').hide();

  var expIdea = document.getElementById("idea-expand");
  expIdea.addEventListener("webkitAnimationEnd", showIdeaText);
}



function showIdeaText() {
  $('.idea-text').removeClass('hidden');
  $('.tweets').removeClass('hidden');
  $('.resources').removeClass('hidden');

}
