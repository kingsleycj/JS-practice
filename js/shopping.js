// intro to array
var shoppingList = [
    'carrots', 
    'milk', 
    'eggs'
];
console.log(shoppingList[0]);
console.log(shoppingList[1]);
console.log(shoppingList[2]);
console.log(shoppingList[3]);

// adding items to an array
var Numbers = [1,2,3,4,5,6];
Numbers[Numbers.length] = 7
console.log(Numbers);

// alternative way to add numbers to an array

Numbers.push(8, 9);
Numbers.unshift(-2, -1, 0);
Numbers.shift();
console.log(Numbers);
