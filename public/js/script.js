var lang;
var item;

$(function() {
  getLanguages('/api/languages');
});

function tog() {
  $('.idea-modal').addClass("show-me");
}


function getLanguages (api) {
    fetch(api, {
        method: 'GET'
    })
    .then(function (res) {
        res.json()
        .then(function (json) {
          lang = randomise(json);
          console.log("here", lang);
        });
    })
}

function randomise(json) {

  // make a random number
  var random = (Math.random() * 1000);

  // pick index
  var pick =  parseInt(random) % json.length;

  return json[pick];
}
