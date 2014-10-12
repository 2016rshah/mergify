
function authorize(){
	var client_id = 'c5420045770248e9846f1c2c20721cea'; // Your client id
	var client_secret = 'df48b68fbdb64b8c92606c3ee3b8c888'; // Your client secret
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

