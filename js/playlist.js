// adding items to an array
// var playList = [];
// playList.push('I Did It My Way');
// playList.push('Respect', 'Imagine');
// playList.unshift('Born to Run');
// playList.unshift('Louie Louie', 'Maybellene');
// printList(playList);

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

/*
var playList = [
 ['I Did It My Way', ' Frank Sinatra'],
 ['Respect', ' Aretha Frankllin'],
 ['Imagine', ' John Lennon'],
 ['Born to Run', ' Bruce Springsteen'],
 ['Louie Louie', ' The Kingsmen'],
 ['Maybellene', ' Chuck Berry']
];

function print(message) {
  document.write(message);
}

function printSongs(songs) {
  var listHTML = "<ol>";
  for (var i = 0; i < songs.length; i++) {
    listHTML += "<li>" + songs[i][0] + ' by ' + songs[i][1] + "</li>";
  }
  listHTML += "</ol>";
  print(listHTML);
}
printSongs(playList);
*/


