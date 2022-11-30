// /*
// The Random Number Guessing game generates a number between 1 and 6 and gives a player two attempts to guess the number.
// */

// // assume the player didn't guess correctly
// var correctGuess = false;

// // generates random number from 1 to 6
// var randomNumber = Math.floor(Math.random() * 6) + 1;

// var guess = prompt('i\'m thinking of a number between 1 and 6, what is it?');

// /* test to see if the player is:
// 1. correct
// 2. guessed too high
// 3. guessed too low
// */

// if (parseInt(guess) === randomNumber ){
//     correctGuess = true;
// } else if (parseInt(guess) < randomNumber){
//     var guessMore = prompt('Try again. The number I am thinking of is more than the guess: ');
//     if(parseInt(guessMore) === randomNumber){
//         correctGuess = true;
//     }
// } else if (parseInt(guessMore) === randomNumber) {
//     var guessLess = prompt('Try again. The number I am thinking of is less than the guess: ');
//     if (parseInt(guessLess) === randomNumber){
//         correctGuess = true;
//     }
// }

// // test if player is correct and output the response
//  if (correctGuess) {
//     document.write('you guessed right');
// }else{
//     document.write('you guessed wrong. The number was: ' + randomNumber);
// }
function getRandomNumber(lower, upper) {
  if (isNaN(lower) || isNaN(upper)) {
    throw new Error("Both arguments must be numbers");
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// console.log(getRandomNumber("nine", 24));
// console.log(getRandomNumber(1, 100));
// console.log(getRandomNumber(200, "five hundred"));
// console.log(getRandomNumber(1000, 20000));
// console.log(getRandomNumber(50, 100));

let phonesInStock = [
  'iPhone 11', 
  'Samsung Galaxy S10', 
  'Google One Plus 6', 
  'iPhone 12 pro max', 
  'iPhone 12 mini', 
  'Samsung Galaxy S21', 
  'LG Nexus'
];
let search;
let addNewItem;
let newItem;

while (true) {
  // import readline module
  const readline = require("readline");
  // create interface for input and output
  const search = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // create empty user input
  let userInput = "";
  // question user to enter name
  search.question("What Brand and Model of Phone would you like to buy from us?. Type \"quit\" to quit or \"list\" to list all available devices\n", function (string) {
    userInput = string;

    console.log(`You've added ${userInput} to your cart`);

    // close input stream
    search.close();
    
  });

  // search = prompt('What Brand and Model of Phone would you like to buy from us?. Type "quit" to quit or "list" to list all available devices');
  // newItem = prompt(' Which other device would you like to add to your shopping cart? ');
  addNewItem = phonesInStock.push(newItem);
  if (search === 'quit'){
    break;
  } else if (search === 'list'){
    console.log(phonesInStock.join(','));
  } else {
    if (phonesInStock.indexOf(search) > -1){
      console.log(`yes we have ${search} in stock`);
    } else {
      console.log(`${search} is not in stock`);
    }
  }
}
console.log('Thank you for shopping from Kingsley\'s store');
