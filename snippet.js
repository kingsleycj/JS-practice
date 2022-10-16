/*
function randomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
var counter = 0;
while (counter < 10) {
  var randNum = randomNumber(6);
  document.write(randNum + " ");
  counter += 1;
}
*/

// a program to make a computer guess a randomly generated number
/*
var upper = 1000000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts++;
}
document.write("<p> The random number was: " + randomNumber + "</p>");
document.write(
  "<p> It took the Computer " + attempts + " attempts to get it right.</p>"
);
*/

// a program to count number of guesses until guess is correct

/*

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

do {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount++;
    if ( parseInt(guess) === randomNumber ) {
        correctGuess = true;
    }
} while ( ! correctGuess)
document.write('<h1> You guessed the number!<h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

*/

// For Loop
/*
var counter = 0;
while (counter < 10) {
  document.write(counter);
    counter++;
}
*/
// the above can be written alternatively using for loop
/*
for (var counter = 0; counter < 10; counter++) {
  document.write(counter);
}
*/

var html = '';

for ( var i = 1; i <= 9; i++) {
  html += '<div>' + i + '</div>' ;
}
document.write( html);