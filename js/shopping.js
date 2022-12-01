// intro to array
var shoppingList = [
    'carrots', 
    'milk', 
    'eggs'
];
// console.log(shoppingList[0]);
// console.log(shoppingList[1]);
// console.log(shoppingList[2]);
// console.log(shoppingList[3]);

// adding items to an array
var Numbers = [1,2,3,4,5,6];
Numbers[Numbers.length] = 7
// console.log(Numbers);

// alternative way to add numbers to an array

Numbers.push(8, 9);
Numbers.unshift(-2, -1, 0);
Numbers.shift();
// console.log(Numbers);

let catalog = [
    ['iPhone X', 200],
    ['iPhone 11', 325],
    ['iPhone 11 Pro Max', 450],
    ['iPhone Xs', 250],
    ['iPhone Xs Max', 320],
    ['iPhone 12', 470]
];

let total ;
let search;
let addPrices1;
let addPrices2;
let addPrices3;
let addPrices4;
let addPrices5;
let addPrices6;
let next;


const print = (message) => console.log(message);

do {
    search = prompt(
      'What Brand and Model of Phone would you like to buy from us?. Type "quit" to quit or "list" to list all available devices'
    );
}while( total !== null){
    for (let i = 0; i < catalog.length; i++){
        addPrices1 = parseInt.catalog[i][1];
        next = 
    }
}


print('CheckOut UI')
print('Your Order')
print("item ........................................... $1600");
print("item2 .......................................... $3200");
print("item3 .......................................... $3200");
print("item4 .......................................... $3200");
print("item5 .......................................... $3200");
print("Total .......................................... $4800");
