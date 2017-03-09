$(function() {
  getData('/api/languages').then(function(json) {
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
  $('.ball').addClass("roll");
  $('.idea-modal').addClass("show-me");

}

function buildString(json) {
  return "Use C# to ITEM";
}
