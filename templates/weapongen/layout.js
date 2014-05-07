var head;
head = require('../head.js');
head['script[type="text/javascript" src="../res/scripts/weapongen.js"]'] = "";

var template = {
	'': '<!DOCTYPE html>',
	html: {
		head: [head],
		body: [require('./weapongen.js')]
	}
};


module.exports = template;