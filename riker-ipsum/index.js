// Node Modules
var os   = require("os");
var proc = require("child_process").spawn((os.platform() === "darwin") ? "pbcopy" : "clip");

// Private Modules
var quotes = require('./_riker-ipsum').getQuotes();

// Script Variables
var l      = quotes.length;
var i      = Math.floor(Math.random() * l);
var quote  = quotes[i];

// Execute
copy(quote);
console.log(quote);

// Functions

/**
  * @param {string} data - The data sent to the system keyboard
  * From <http://stackoverflow.com/questions/7778539/copy-to-clipboard-in-nodejs>
  */

function copy(data) {
  proc.stdin.write(data);
  proc.stdin.end();
}
