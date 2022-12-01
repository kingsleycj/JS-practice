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
    console.log('\n');

    // close input stream
    search.close();
});