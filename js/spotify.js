// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/

$(document).ready( function() {
  $("#search").submit( function(evt){
    evt.preventDefault();
    $("#results").empty(); // Clears previous search results
    var keyword = $("#search-keyword").val();
    var type = $("#search-type").val();
    type == "artist" ? searchByArtist(keyword) : searchByTrack(keyword); // Not sure if using ternary(sp?) operator correctly here, let's find out
  });
});

function searchByArtist(keyword) {

  var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json'
  }).done( function(response) {

    for (var i=0; i < response.artists.length; i++) {
      $("#results").append("<li><a href='" + response.artists[i].href + "'>" + response.artists[i].name + "</a></li>");
    }

  }).fail( function() {
    console.log("Oops, I don't think so...");
  }).always( function() {
    console.log("Beep boop");
  });

}



function searchByTrack(keyword) {
  var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
}
