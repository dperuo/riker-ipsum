
var os        = require("os");
var isOSX     = os.platform() === "darwin";
var clipboard = isOSX ? "pbcopy" : "clip";
var proc      = require("child_process").spawn(clipboard);

var quotes = require('./_riker-ipsum').getQuotes();
var l      = quotes.length;
var i      =
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




Math.floor(Math.random() * l);
