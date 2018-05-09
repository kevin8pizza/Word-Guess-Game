
var letters = ["_", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wordBank = [ 'deathstar', 'skywalker', 'wookie', 'speeder', 'lightsaber', 'ewok', 'hoth', 'droid', 'jedi', 'kenobi', 'coruscant', 'alderaan', 'trooper', 'dewback', 'bantha', 'sandcrawler', 'cloudcity', 'lightspeed', 'kessel', 'yavin', 'tatooine', 'moseisley', 'jawa', 'wompa', 'blaster', 'bothan', 'empire', 'rebel'];


var currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];

console.log(currentWord)

var currentSpelling = currentWord.split('');

console.log(currentSpelling);

var letterGuess = '';
// .toLowerCase()

// test to generate letters
document.keyUp = function() {
    
    var test = this;
    console.log(test);
} 

// letter guess function so far
//document.onkeyUp = function(guess) {
    //letterGuess.toLowerCase() = this;
    //if (letterGuess === currentSpelling.indexOf(letterGuess)) {
        //return true;
        //console.log('Correct!');
    //}
    //else {
        //return false;
        //console.log('Incorrect');
    //}
//};


// for loop to add blanks that are then replaced with correctly guessed by player

// use .split() and .join() to make and break arrays//
