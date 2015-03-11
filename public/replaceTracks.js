
function authorize(){
	var client_id = CLIENT_ID; // Your client id
	var client_secret = CLIENT_SECRET; // Your client secret
	var spotURL = "https://accounts.spotify.com/authorize"
	spotURL += "?client_id="+client_id;
	spotURL += "&redirect_uri="+encodeURIComponent("https://www.google.com/");
	spotURL += "&response_type=token";
	console.log(spotURL);
	$.get( spotURL, function( data ) {
		$( ".result" ).html( data );
			alert( "Load was performed." );
	});
}

$("#login").click(function(){
	console.log("click");
	authorize();
});

var spotifyApi = new SpotifyWebApi();
spotifyApi.getAlbum('64fQ94AVziavTPdnkCS6Nj', function(err, data) {
	if (err) console.error(err);
	else console.log('Artist albums', data);
});

