$(document).ready ( function(){
	$.getJSON( "localhost:8000/res/json/weaponsList.json", {})

		 .done(function( json ) {
				console.log("hey");
		var weaponKeys = Object.keys(json);
		var weaponResultKey = weaponKeys[(Math.floor(Math.random() * weaponKeys.length)-1)];
		var weaponResult = json[weaponResultKey];
		$.getJSON( window.location.host + "/res/json/adjectiveList.json", function (adjectivedata) {
			var adjectiveKeys = Object.keys(adjectivedata);
			var adjectiveResultKey = adjectiveKeys[(Math.floor(Math.random() * adjectiveKeys.length)-1)];
			var adjectiveResult = adjectivedata[adjectiveResultKey];
			$( "div.#result" ).replaceWith( "<div>Your weapon is:</div> <div id='adjective'><%= adjectiveResult %></div> <div id='weapon'><%= weaponResult %></div>.");
			});
			})
			.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
			});


	});
