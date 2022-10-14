/* 
var user = prompt('Enter a maximum random integer: ');
var topNumber = parseInt(user);
var user2 = prompt('Enter a starting value: ');
var bottomNumber = parseInt(user2);
var randomNumber = Math.floor(Math.random(user) * (topNumber - bottomNumber +1)) + bottomNumber;
var message = "<p>" + randomNumber + ' is a number between 1 and ' + topNumber + ".</p>";
document.write(message);

*/

// function getArea(width, height, unit) { 
//     var area = height * width ;
//     return area + " " + unit;
// }
// console.log(getArea(10, 20, 'sq ft'));

// function nth_most_rate(list, n) {
//   var mf = 1;
//   var m = 0;
//   var item;
//   for (var i = 0; i < nth_most_rate.length; i++) {
//     for (var j = i; j < nth_most_rate.length; j++) {
//       if (nth_most_rate[i] == nth_most_rate[j]) m++;
//       if (mf < m) {
//         mf = m;
//         item = nth_most_rate[i];
//       }
//     }
//     m = 0;
//   }
//   return item;
// }
// nth_most_rate([1, 5, 2, 4, 3, 2, 1, 4, 5], 1);

// console.log(item + " ( " + mf + " times ) ");
