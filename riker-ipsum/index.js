var os        = require("os");
var isOSX     = (os.platform() === "darwin");
var clipboard = isOSX ? "pbcopy" : "clip";
var proc      = require("child_process").spawn(clipboard);
var args      = process.argv.slice(2);

var quotes = require('./riker-quotes');
var i      = getRandomIndex(quotes);
var quote  = quotes[i];


// Execute
copy(quote);
console.log(quote);


/**
 * copy()
 * Copies the selected quote to the system clipboard.
 *
 * @param {string} data - The data sent to the system keyboard
 */

function copy(data) {
  proc.stdin.write(data);
  proc.stdin.end();
}

/**
 * getRandomIndex()
 * Returns a random index based on the array length.
 *
 * @params {Array} array - The array of values.
 * @returns {number} rand - The random index.
 */

function getRandomIndex(array) {
  var _array = array || [];
  var _len = _array.length;
  var rand = Math.floor(Math.random() * _len);

  return rand;
}


