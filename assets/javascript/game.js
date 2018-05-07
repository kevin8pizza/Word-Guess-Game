var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var letterGuess = '';

//Letters Guessed
$('#body').keyUp(function() {
    letterGuess = this; // letterGuess should now equal a string of the key pressed
    lowerCase(this);// make the letter pressed lower case
    // if -- check 'this' is a letter of the word
    // else -- otherwise send 'this' to guessed bank
})

// for loop to add blanks that are then replaced with correctly guessed by player