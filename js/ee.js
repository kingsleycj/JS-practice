/*
let catalog = [
  ["iPhone X", 200],
  ["iPhone 11", 325],
  ["iPhone 11 Pro Max", 450],
  ["iPhone Xs", 250],
  ["iPhone Xs Max", 320],
  ["iPhone 12", 470],
];
*/

var catalog = [
   [ "iPhone 11", 22],
   [ "Samsung Galaxy S10", 230],
    ["Google One Plus 6", 230],
    ["iPhone 12 pro max", 230],
   [ "iPhone 12 mini", 230],
   [ "Samsung Galaxy S21", 230],
   [ "LG Nexus", 230],
    ["Google One Plus 5", 230],
    ["Xiaomi Redmi Note 6", 230],
];

function print(message) {
    console.log(message);
}

var cart = [];
var r1 = require("readline");
var prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Enter your Name: ", function (username) {
    print(`Welcome ${username} to Kingsley\'s store`);
    print(`\nHere are the list and prices of our Phone Catalog: \n\n${catalog}`);
    prompts.question(
        "\nSelect the device you'd like to add to your shopping cart:  ",
        function (selectedItem) {
            if (catalog.indexOf(selectedItem) > -1) {
                print(`${selectedItem} has been added to the shopping cart\n`);
                var carts = cart.push(selectedItem);
                print('Your shopping cart : \n ');
                print(carts);
            } else {
                print(selectedItem + " is not in stock");
            }
        }
    );
});

