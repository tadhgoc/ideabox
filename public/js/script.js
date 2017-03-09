$(function() {
  getData('/api/randomise');
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

function tog() {
  $('.box').addClass("shake");
  $('.idea').addClass("fly");
  // $('.idea-modal').addClass("show-me");


}

function buildString(data) {
  result = "Use " + data.language + " to make " + data.word;
  console.log(result);

  $(".idea").text(result);
}
