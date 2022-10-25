/*

var inStock = ['apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potatoes', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
    document.write( '<p>' + message + '</p>' );
}

while (true) {
    search = prompt("Search for a product in our store. Type 'list' to show a list of products available and 'quit' to exit." );
    search = search.toLowerCase();
    if ( search === 'quit') {
        break;
    } else if( search === 'list' ) {
        print( inStock.join( ', ' ) );
    } else {
        if ( inStock.indexOf(search) > -1 ) {
            print('Yes, we have ' + search + ' in the store.' );
            
        } else {
            print( search + ' is not in stock.');
            
        }
    }
}

*/

/*
// using arrow functions to sum and find the product of two arrays
const X = [1,2,3,4,5];      // array 1
const Y = [6,7,8,9,10];     // array 2

const sumOfXY = X.map((value, index) => value + Y [index]);
const productOfXY = X.map((value, index) => value * Y[index]);


console.log('sum of X and Y is: ' + sumOfXY);
console.log('product of X and Y is: ' + productOfXY);
*/
/*
const x = [1, 2, 3, 4, 5];
const y = [6, 7, 8, 9, 10];
const sumOfXY = 0;
const productOfXY = 0;

for (var i = 0; i < x.length; i++ &&  j = x[i]; j < y.length; i++) {
    sumOfXY += y[i];
    productOfXY += y[i];
}
// sumOfXY = [x[0] + y[0], x[1] + y[1], x[2] + y[2], x[3] + y[3], x[4] + y[4]];
// productOfXY = [x[0] * y[0], x[1] * y[1], x[2] * y[2], x[3] * y[3], x[4] * y[4]];

console.log(sumOfXY);
console.log(productOfXY);
*/




var X = [1, 2, 3, 4, 5];
var Y = [6, 7, 8, 9, 10];
var sum = 0;
var sumOfXY = [];
var productOfXY = [];

for (var i = 0; i < X.length; i++) {
  sum = X[i] + Y[i];
  product = X[i] * Y[i];
  sumOfXY.push(sum);
  productOfXY.push(product);
}

console.log(sumOfXY)
console.log(productOfXY)