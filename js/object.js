// // object literals are assigned with {}
// var person = {
//     name : 'John',
//     country : 'United States',
//     age : 35,
//     treehouseStudent : true,
//     skills : ['Javascript', 'HTML', 'CSS']
// };

// // person.name = 'Bobby';
// // person.country = 'Brazil';
// // console.log(person.name);
// // console.log(person.country);

// // object properties

// function print(message) {
//     var div = document.getElementById('output');
//     div.innerHTML = message;
// }

// var message = '<p> Hello. My name is ' + person.name + ' </p>';

// print(message);

var inputName = prompt('Enter your name: '); 
var show = "Your name is " + inputName + "</br>";

// for (var i = 1; i <= 50; i++) {
    var show = "<p>Your name is " + inputName + "</p>";
//     document.write(show)
// }

function print(message){
    document.write(message)
    console.log(message)
}

function printName(i) {
  var listName = "<ol>";
  for (var i = 1; i <=50; i++) {
    listName += "<li>" + show + "</li>";
  }
  listName += "</ol>";
  print(listName);
}
printName(inputName);
