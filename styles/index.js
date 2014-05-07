module.exports = function(api) {

	api.plugin("backgroundDiv", function(api, value) {
		return {
			position: "relative",
			overflow: "auto",
			backgroundImage: "url(" + value + ")",
			backgroundRepeat: "no-repeat",
			width: "1024px",
			height: "768px",
			margin: "auto"
		};
	});

	var index = {
		/* Font Faces */
		"@font-face": {
			fontFamily: "chinese_rocks_rg",
			src: "url(res/fonts/chinese_rocks_rg.ttf)"
		},

		/* Main Style */
		body: {
			fontSize: "22px",
			font: "14px 'Lucida Grande', Helvetica, Arial, sans-serif",
			color: "#000000",
			backgroundColor: "#FFFFFF"
		},
		header: {
		},
		footer: {
			margin: "auto auto auto auto"
		},

		/* Main Fonts */
		"h1#Title": {
			position: "absolute",
			color: "#4d2200",
			textShadow: "1px 1px 3px #995700",
			top: "90px",
			left: "425px"
		},
		"h1#Error": {
			position: "absolute",
			color: "#4d2200",
			textShadow: "1px 1px 3px #995700",
			top: "85px",
			left: "460px"
		},
		"p#Copyright": {
			verticalAlign: "text-bottom",
			textAlign: "center",
			fontSize: "small"
		},

		/* Mists */
		"div#HeightMist": {
			height: "100%",
			minHeight: "1px",
			color: "#000000",
			whiteSpace: "pre-wrap"
		},
		"div#WidthMist": {
			width: "100%",
			minWidth: "1px",
			color: "#000000",
			whiteSpace: "pre-wrap"
		},

		/* Background Styles */
		"div#Forest": {
			backgroundDiv: "/res/images/de/Forest.png"
		},
		"div#Grass": {
			backgroundDiv: "/res/images/de/Grass.png"
		},
		"div#Street": {
			backgroundDiv: "/res/images/ascend/Street.png"
		},
		"div#SignPost": {
			backgroundDiv: "/res/images/de/SignPost.png"
		},
		"div#Decoration": {
			backgroundDiv: "/res/images/de/Decoration.png"
		},
		"div#Overlay": {
			backgroundDiv: "/res/images/ascend/Overlay.png"
		},
		/* SignPost Arrows */
		"a#ADA": {
			backgroundImage: "url('/res/images/ascend/LeftArrow1.png')",
			backgroundRepeat: "no-repeat",
			borderStyle: "none",
			position: "absolute",
			top: "240px",
			right: "540px",
			width: "273px",
			height: "76px"
		},
		"a#TXA": {
			backgroundImage: "url('/res/images/de/RightArrow.png')",
			backgroundRepeat: "no-repeat",
			borderStyle: "none",
			position: "absolute",
			top: "240px",
			right: "220px",
			width: "280px",
			height: "76px"
		},
		"span#ADL": {
			textDecoration: "none",
			fontFamily: "chinese_rocks_rg",
			color: "#4d2200",
			textShadow: "1px 1px 3px #995700",
			position: "absolute",
			top: "26px",
			left: "80px"
		},
		"span#TXL": {
			textDecoration: "none",
			color: "#4d2200",
			textShadow: "1px 1px 3px #995700",
			position: "absolute",
			top: "24px",
			right: "80px"
		}

	};

	api.add(index);
};