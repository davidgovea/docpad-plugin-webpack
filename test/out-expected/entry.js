/******/ (function(modules) { // webpackBootstrap
/******/ 	// shortcut for better minimizing
/******/ 	var exports = "exports";
/******/ 	
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/ 	
/******/ 	// The require function
/******/ 	function require(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId][exports];
/******/ 		
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module[exports], module, module[exports], require);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module[exports];
/******/ 	}
/******/ 	
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	require.modules = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	require.cache = installedModules;
/******/ 	
/******/ 	// __webpack_public_path__
/******/ 	require.p = "";
/******/ 	
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return require(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, require) {

	/**
	 * Entry file for our Webpack suite of files.
	 */

	// Retrieve the increment function.
	var inc = require(1).increment;

	// Set a value.
	var a = 1;

	// Increment it.
	var i = inc(a);

	// Output the incremented value.
	var output = 'Increment of 1 is: ' + i.toString();
	console.log(output);
	document.write(output);

	var css = require(3);
	console.log(css);

/***/ },
/* 1 */
/***/ function(module, exports, require) {

	var add = require(2).add;
	exports.increment = function(val) {
		return add(val, 1);
	};


/***/ },
/* 2 */
/***/ function(module, exports, require) {

	exports.add = function() {
		var sum = 0, i = 0, args = arguments, l = args.length;
		while (i < l) {
			sum += args[i++];
		}
		return sum;
	};


/***/ },
/* 3 */
/***/ function(module, exports, require) {

	module.exports =
		"body {\n\tbackground-color: black;\n}\n";

/***/ }
/******/ ])