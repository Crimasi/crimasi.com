var env = process.env.CRIMASI_ENV;
var head;

head = {
	title: 'Crimasi!',
	'link[rel="stylesheet" href="./res/styles/index.css"]': null
};

switch(env) {
	case "production":
		head['script[type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"]'] = "";
		head['script[type="text/javascript" src="https://oss.maxcdn.com/jquery.velocity/0.0.0/jquery.velocity.min.js"]'] = "";
		break;
	case "development":
		head['script[type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.js"]'] = "";
		head['script[type="text/javascript" src="https://oss.maxcdn.com/jquery.velocity/0.0.0/jquery.velocity.js"]'] = "";
		break;
	default:
		throw new Error('Enviroment is set to "' + env + '", it should be set to either "production", or "development"!');
}

module.exports = head;