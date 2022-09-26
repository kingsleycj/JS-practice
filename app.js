var user = prompt('Enter a maximum random integer: ');
var topNumber = parseInt(user);
var user2 = prompt('Enter a starting value: ');
var bottomNumber = parseInt(user2);
var randomNumber = Math.floor(Math.random(user) * (topNumber - bottomNumber +1)) + bottomNumber;
var message = "<p>" + randomNumber + ' is a number between 1 and ' + topNumber + ".</p>";
document.write(message);