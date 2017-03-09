$(function() {
  getData('/api/randomise').then(function(json) {
    console.log(buildString(json));
    $(".idea-modal").text(buildString(json));
  });

});

function getData (api) {
    return fetch(api, {
        method: 'GET'
    })
    .then(function (res) {
        res.json()
        .then(function (json) {
          return json;
        });
    }).catch(function (err) {
        console.error(err)
    });
}

function tog() {
  $('.box').addClass("tip");
  $('.ball').addClass("bounce");
  // $('.idea-modal').addClass("show-me");

}

function buildString(json) {
  return "Use C# to ITEM";
}

$().addEventListener('transitionend', removeTransition)
