// object literals are assigned with {}
var person = {
    name : 'John',
    country : 'United States',
    age : 35,
    treehouseStudent : true,
    skills : ['Javascript', 'HTML', 'CSS' ]
};

// person.name = 'Bobby';
// person.country = 'Brazil';
// console.log(person.name);
// console.log(person.country);

// object properties
function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

var message = '<p> Hello. My name is ' + person.name + ' </p>';
print(message);