$(function() {
  getData('/api/randomise');
  $('.idea-text').hide();
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
}

function tog() {
  $('.box').addClass("shake");
  $('.idea').addClass("fly");
}

function showIdea() {
  console.log("called show idea");
  $('.idea-text').show();
}
