#! /usr/bin/env node

var os        = require("os");
var clipboard = setClipboard(os.platform());
var proc      = require("child_process").spawn(clipboard);
var args      = process.argv.slice(2);

var isReal = (args.indexOf('--test') === -1);

var quotes = require('./riker-quotes');
var quote  = getQuote(quotes);



// Execute
copy(quote);
console.log('\x1b[32m', quote);

/**
 * copy()
 * Copies the selected quote to the system clipboard.
 *
 * @param {string} data - The data sent to the system keyboard
 */

function copy(data) {

  if (isReal) {
    proc.stdin.write(data);
  }

  proc.stdin.end();
}

/**
 * getQuote()
 * get a random quote from the quote array
 *
 * @params {Array} array - The array of quotes.
 *
 * @returns {string} quote - The random quote.
 */

function getQuote(array) {
  var i = getRandomIndex(array);
  return array[i];
}

/**
 * getRandomIndex()
 * Returns a random index based on the array length.
 *
 * @params {Array} array - The array of values.
 *
 * @returns {number} rand - The random index.
 */

function getRandomIndex(array) {
  var _array = array || [];
  var _len = _array.length;
  var rand = Math.floor(Math.random() * _len);

  return rand;
}

/**
 * setClipboard()
 * set the system clipboard
 *
 * @param {string} platform - the platform from os.platform()
 *
 * @returns {string} - the correct clipboard for the platform
 */

function setClipboard(platform) {
   var clipboards = {
     darwin: "pbcopy",
     linux: "xclip",
     windows: "clip",
   };

   return clipboards[platform];
 }
