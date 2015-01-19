
var os        = require("os");
var isOSX     = os.platform() === "darwin";
var clipboard = isOSX ? "pbcopy" : "clip";
var proc      = require("child_process").spawn(clipboard);

var quotes = require('./_riker-ipsum').getQuotes();
var l      = quotes.length;
var i      = Math.floor(Math.random() * l);
var quote  = quotes[i];


// Execute
copy(quote);
console.log(quote);


/**
 * copy()
 * @param {string} data - The data sent to the system keyboard
 */

function copy(data) {
  proc.stdin.write(data);
  proc.stdin.end();
}
