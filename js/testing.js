let catalog = [
    "iPhone 11",
    "Samsung Galaxy S10",
    "Google One Plus 6",
    "iPhone 12 pro max",
    "iPhone 12 mini",
    "Samsung Galaxy S21",
    "LG Nexus",
    "Google One Plus 5",
    "Xiaomi Redmi Note 6",
];

function print (message){
    console.log(message);
}
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
    // userInput = userInput.toLowerCase();
 if (userInput === 'list'){
    print(catalog.join(','));

    }else {
        if (catalog.indexOf(userInput) > -1 ){
        print( 'Yes, we have ' + userInput + ' in the store.\n' );
    } else {
        print(userInput + ' is not in stock')
        }
    }
// let cart = userInput.value().push()
//     print(`You've added ${userInput} to your cart`);

    // close input stream
    search.close();
});