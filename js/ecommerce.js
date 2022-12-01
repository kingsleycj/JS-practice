// Product Catalog
let phonesInStock = [
    "iPhone 11",
    "Samsung Galaxy S10",
    "Google One Plus 6",
    "iPhone 12 pro max",
    "iPhone 12 mini",
    "Samsung Galaxy S21",
    "LG Nexus",
    "Google One Plus 5",
    "Xaiomi Redmi Note 6",
];

// Variable Declarations
let search;
let addNewItem;
let newItem;

// A print function: to easily console.log outputs
function print(message) {
  console.log(message);
}


  // import readline module
const readline = require("readline");
  // create interface for input and output
search = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  // create empty user input
let userInput = "";
  // question user to enter name
search.question(
    'What Brand and Model of Phone would you like to buy from us?. Type "quit" to quit or "list" to list all available devices\n',
    function (string) {
        userInput = string;
        console.log(`You've added ${userInput} to your cart`);
      // close input stream
        search.close();
    }
);
  // search = prompt('What Brand and Model of Phone would you like to buy from us?. Type "quit" to quit or "list" to list all available devices');
  // newItem = prompt(' Which other device would you like to add to your shopping cart? ');
  // search = search.toLowerCase();

addNewItem = phonesInStock.push(userInput);
if (userInput === "list") {
    // Listing Product Catalog
    print(phonesInStock.join(","));
} else {
    if (phonesInStock.indexOf(userInput) > -1) {
    print(`yes we have ${userInput} in stock`);
    } else {
    print(`${userInput} is not in stock`);
    }
}
print(`All Items in your cart: `);
print(addNewItem);

print("Thank you for shopping from Kingsley's store");


