$(function() {
  getLanguages('/api/languages');
});

function tog() {
  $('.idea-modal').addClass("show-me");
}


function getLanguages (url) {
    fetch(url, {
        method: 'GET'
    })
    .then(function (res) {
        res.json()
        .then(function (json) {
            console.log(json);
            randomise(json);
        });
    })
    .catch(function (err) {
        console.error(err)
    });
}

function randomise(json) {

  // make a random number
  var random = (Math.random() * 1000);

  // pick index
  var pick =  parseInt(random) % json.length;

  return json[pick];
}
