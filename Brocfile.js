'use strict';
/* Requires */
//Basic Broccoli
var env = require('broccoli-env').getEnv();
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
//Compile
var absurd = require('broccoli-absurd-filter');
var autoPrefixer = require('broccoli-autoprefixer');
//Minify
var imageMinifier = require('broccoli-imagemin');
var htmlMinifier = require('broccoli-htmlmin');
var cssOptimizer = require('broccoli-csso');
var stripDebug = require('broccoli-strip-debug');
var uglifyJavascript = require('broccoli-uglify-js');

/* Trees */

// src
var fontTree = 'fonts';
var imageTree = 'images';
var jsonTree = 'json';
var scriptTree = 'scripts';
var styleTree = 'styles';
var viewTree = 'views';
// build
var resultTree;

/* Options */

var styleAbsurdOptions = {
  morph: false, // Default is CSS
  minify: false,
	root: __dirname
};
var viewAbsurdOptions = {
  morph: 'html',
  minify: false,
	root: __dirname
};

var viewMinifierOptions = {
	empty: true
};

/* Compiling */

styleTree = absurd(styleTree, styleAbsurdOptions);
viewTree = absurd(viewTree, viewAbsurdOptions);

styleTree = autoPrefixer(styleTree);

/* Minifying */

if (env === 'production') {
	scriptTree = stripDebug(scriptTree);
	styleTree = stripDebug(styleTree);
	viewTree = stripDebug(viewTree);

	imageTree = imageMinifier(imageTree);
	scriptTree = uglifyJavascript(scriptTree);
	styleTree = cssOptimizer(styleTree);
  viewTree = htmlMinifier(viewTree, viewMinifierOptions);
}

/* Moving & Merging */

fontTree = pickFiles(fontTree, {
  srcDir: '/',
  files: ['**/*.*'],
  destDir: '/res/fonts'
});

imageTree = pickFiles(imageTree, {
  srcDir: '/',
  files: ['**/*.*'],
  destDir: '/res/images'
});

jsonTree = pickFiles(jsonTree, {
  srcDir: '/',
  files: ['**/*.*'],
  destDir: '/res/json'
});

scriptTree = pickFiles(scriptTree, {
  srcDir: '/',
  files: ['**/*.*'],
  destDir: '/res/scripts'
});

styleTree = pickFiles(styleTree, {
  srcDir: '/',
  files: ['**/*.*'],
  destDir: '/res/styles'
});

resultTree = mergeTrees([fontTree, imageTree, jsonTree, scriptTree, styleTree, viewTree], { overwrite: false });

/* Exporting */

module.exports = resultTree;