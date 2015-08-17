#! /usr/bin/env node

// node modules
var os        = require('os');
var program   = require('commander');
var clipboard = require('safe-copy-paste').silent();

// utilities
var package = require('./package.json');
var quotes  = require('./util/riker-quotes');

var quote = getQuote(quotes);

/**
 * command line options
 */

program
  .version(package.version)
  .option('--max-chars <number>', 'Limits quote length to <number> or fewer characters, including whitespace.')
  .option('--max-words <number>', 'Limits quote length to <number> or fewer words.')
  .option('--min-words <number>', 'Limits quote length to <number> or more words.')
  .option('--min-chars <number>', 'Limits quote length to <number> or more characters including whitespace.')
  .option('--test', 'Prints quote to the console without copying to the clipboard.')
  .parse(process.argv);

/**
 * execute program
 */

execute(quote);

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
 * execute()
 * main function
 *
 * @param {string} quote - the selected quote.
 */

function execute(quote) {
  // if the --test flag is absent...
  if (!program.test) {
    // copy quote to the clipboard. Otherwise...
    clipboard.copy(quote);
  }

  // just print to the console.
  console.log('\x1b[32m', quote);
}

