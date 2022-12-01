// adding items to an array
// var playList = [];
// playList.push('I Did It My Way');
// playList.push('Respect', 'Imagine');
// playList.unshift('Born to Run');
// playList.unshift('Louie Louie', 'Maybellene');

// function print(message) {
//   console.log(message);
// }

// print(playList);

// removing items from an array
/*
var numbers = [1,2,3,4,5,6];
var firstItem = numbers.shift();
var lastItem = numbers.pop();

console.log('first Item is ' + firstItem);
console.log('last item is ' + lastItem);
*/

// Using loops for arrays

/*
var playList = [
    'I Did It My Way',
    'Respect',
    'Imagine',
    'Born to Run',
    'Louie Louie',
    'Maybellene'
];

function print(message){
    document.write(message);
}

function printList(list){
    var listHTML = '<ol>';
    for (var i = 0; i < list.length; i++) {
        listHTML += '<li>' + list[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}
printList(playList);
*/

// useful array methods

// joining a symbol or character to an array in a variable
/*
var daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var daysString = daysInWeek.join(', ');
console.log(daysString);
*/

// concatenating two variables in an array
/*
var currentStudents = ['Joan', 'John', 'Joaquin'];
var newStudents = ['Samantha', 'Traci', 'Tiago'];
var allStudents = currentStudents.concat(newStudents);

console.log(allStudents);
*/

// searching for an item in an array
/*
var fruit = ['Apple', 'Orange', 'Grapefruit'];
var position = fruit.indexOf('Grapefruit');
console.log(position);

*/

//  using 2-D array to build a music playlist displaying both song and artist

var catalog = [
  ["iPhone 11", 320],
  ["Samsung Galaxy s10", 250],
  ["redmi note 9", 200],
  ["tecno camon 16", 160],
  ["infinix note 10", 90],
  ["LG nexus", 220],
];

function print(message) {
  console.log(message);
}

function printList(items) {
  var list = "\n[\n";
  for (var i = 0; i < items.length; i++) {
    list += "\n[" + items[i][0] + " costs " + "$" + items[i][1] + "]\n";
  }
  list += "\n]\n";
  print(list);
}

var cart = [];
var r1 = require("readline");
var prompts = r1.createInterface({
  input: process.stdin,
  output: process.stdout,
});
prompts.question("Enter your name: ", function (username) {
  print(`Hey ${username}, welcome to Kingsley\'s store`);
  print(`\nHere are the list and prices of our Phone Catalog: `);
  printList(catalog);
  prompts.question(
    "\nSelect the device you'd like to add to your shopping cart:  ",
    function (selectedItem) {
      function printSelected(items) {
        for (var i = 0; i < items.length; i++) {
          if (catalog.indexOf(selectedItem[i]) > -1) {
            print(`${selectedItem} has been added to the shopping cart\n`);
            cart = cart.push(selectedItem);
            print("Your shopping cart : \n ");
            print(cart);
          } else {
            print(selectedItem + " is not in stock");
          }
        }
      }
      printSelected(cart)
    }
  );
});
