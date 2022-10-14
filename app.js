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


// find nth rarest term in an array using nodejs?
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

//  Create a function that returns the nth-rarest term  in an array in nodejs?
function nthElementFinder(a, n) {
    const result = [];
    let i = n - 1;
    while (i < a.length) {
        result.push(a[i]);
        i += n;
    }
    return result;
}

console.log(nthElementFinder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


