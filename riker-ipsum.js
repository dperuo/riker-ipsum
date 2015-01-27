/*
 * riker-ipsum.js
 *
 * Derek Peruo <http://github.com/dperuo/riker-ipsum>
 *
 */


 var os        = require("os");
 var isOSX     = os.platform() === "darwin";
 var clipboard = isOSX ? "pbcopy" : "clip";
 var proc      = require("child_process").spawn(clipboard);
 var args      = process.argv.slice(2);

 var quotes = getQuotesArray();
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

function getRandomIndex (array) {var _array = array || [];
  var _len = _array.length;
  var rand = Math.floor(Math.random() * _len);

  return rand;
}


/**
 * getQuotesArray()
 * Returns an array of Riker Quotes. Quotes are from http://www.rikeripsum.com/
 *
 * @returns {Array} quotesArray - The array of quotes.
 */

function getQuotesArray () {
  var quotesArray = [
    "A lot of things can change in twelve years, Admiral.",
    "A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you.",
    "About four years. I got tired of hearing how young I looked.",
    "And attack the Romulans.",
    "And blowing into maximum warp speed, you appeared for an instant to be in two places at once.",
    "Besides, you look good in a dress.",
    "But the probability of making a six is no greater than that of rolling a seven.",
    "Captain, why are we out here chasing comets?",
    "Commander William Riker of the Starship Enterprise.",
    "Computer, belay that order.",
    "Computer, lights up!",
    "Congratulations - you just destroyed the Enterprise.",
    "Could someone survive inside a transporter buffer for 75 years?",
    "Damage report!",
    "Did you come here for something in particular or just general Riker-bashing?",
    "Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion?",
    "Ensign Babyface!",
    "Fate. It protects fools, little children, and ships named \"Enterprise.\"",
    "Fear is the true enemy, the only enemy.",
    "Flair is what marks the difference between artistry and mere competence.",
    "For an android with no feelings, he sure managed to evoke them in others.",
    "How long can two people talk about nothing?",
    "I am your worst nightmare!",
    "I can't. As much as I care about you, my first duty is to the ship.",
    "I guess it's better to be lucky than good.",
    "I recommend you don't fire until you're within 40,000 kilometers.",
    "I suggest you drop it, Mr. Data.",
    "I think you've let your personal feelings cloud your judgement.",
    "I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet.",
    "I'd like to think that I haven't changed those things, sir.",
    "I'll alert the crew.",
    "I'll be sure to note that in my log.",
    "I'm afraid I still don't understand, sir.",
    "I've had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed it at you instead of them.",
    "In all trust, there is the possibility for betrayal.",
    "Is it my imagination, or have tempers become a little frayed on the ship lately?",
    "Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.",
    "Maybe we better talk out here; the observation lounge has turned into a swamp.",
    "Mr. Crusher, ready a collision course with the Borg ship.",
    "Mr. Worf, you do remember how to fire phasers?",
    "Mr. Worf, you sound like a man who's asking his friend if he can start dating his sister.",
    "My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant?",
    "Not if I weaken first.",
    "Now we know what they mean by \"advanced\" tactical training.",
    "Now, how the hell do we defeat an enemy that knows us better than we know ourselves?",
    "Our neural pathways have become accustomed to your sensory input patterns.",
    "Shields up! Red alert!",
    "Smooth as an android's bottom, eh, Data?",
    "Some days you get the bear, and some days the bear gets you.",
    "Sorry, Data.",
    "Sure. You'd be surprised how far a hug goes with Geordi, or Worf.",
    "Talk about going nowhere fast.",
    "That might've been one of the shortest assignments in the history of Starfleet.",
    "The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules.",
    "The Federation's gone; the Borg is everywhere!",
    "The game's not big enough unless it scares you a little.",
    "The look in your eyes, I recognize it. You used to have it for me.",
    "The unexpected is our normal routine.",
    "Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation.",
    "They were just sucked into space.",
    "This is not about revenge. This is about justice.",
    "This should be interesting.",
    "Travel time to the nearest starbase?",
    "Wait a minute - you've been declared dead. You can't give orders around here.",
    "We could cause a diplomatic crisis. Take the ship into the Neutral Zone.",
    "We finished our first sensor sweep of the Neutral Zone.",
    "We have a saboteur aboard.",
    "We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.",
    "Well, I'll say this for him - he's sure of himself.",
    "Well, that's certainly good to know.",
    "What's a knock-out like you doing in a computer-generated gin joint like this?",
    "What? We're not at all alike!",
    "When has justice ever been as simple as a rule book?",
    "Why don't we just give everybody a promotion and call it a night - \"Commander?\"",
    "Worf, It's better than music. It's jazz.",
    "Wouldn't that bring about chaos?",
    "Yes, absolutely, I do indeed concur, wholeheartedly!",
    "Yesterday I did not know how to eat gagh.",
    "You bet I'm agitated! I may be surrounded by insanity, but I am not insane.",
    "You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice.",
    "You enjoyed that.",
    "You're going to be an interesting companion, Mr. Data.",
    "Your head is not an artifact!",
    "Your shields were failing, sir."
    ];

  return quotesArray;
}
