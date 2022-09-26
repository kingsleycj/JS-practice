// let email = 'primekings.kc@gmail.com';
// console.log(email);

// //string concatenation
// let firstName = 'Brandon';
// let lastName = 'Anderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[2]);

// //string length 
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName); 
// let index = email.indexOf('@');
// console.log(index)

//common string methods

// let email = 'kingsley@gmail.com';

// // let result = email.lastIndexOf('s');

// // let result = email.slice(4,15);

// // let result = email.substr(4,15);

// let result = email.replace('n', 'm');
// console.log(result);

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);
// math operators +, -, *, /, **, %

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius **2;
// order of operation - B I D M A S
// let result = 5 * (10*3) **2;
// console.log(result);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes -= 5;
// likes *=2;
// likes/= 2;
// console.log(likes);

//NaN - Not a Number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// //Number concatenation 
// let result = 'the blog has' +' '+ likes + 'likes';

// console.log(result);


// //template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // concatenation way
// // let result = 'The blog called' + title + 'by' + author + 'has' + likes + 'likes;'
// // console.log(result);

// // template string way
// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);
// // creating html templates

// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span> This blog has ${likes} likes </span>
// `;

// console.log(html);

// let ninjas = ['shaun', 'ryu', 'chun-li'];

// // ninjas[1] = 'ken';
// // console.log(ninjas[1]);

// // let ages = [20, 25, 30, 35];
// // console.log(ages[2]);

// // console.log(random);

// //array methods

// // let result = ninjas.join('-');
// // let result = ninjas.indexOf('chun-li');
// // let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken', 'kenny');
//  result = ninjas.pop();
// console.log(result);

// let age = null;

// console.log(age, age + 3, `age is ${age}`);

//boolean & comparisons
// console.log(true, false, 'true', 'false');

// methods can return booleans
// let email = 'luigi@netninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// // let result = email.includes('!');
// let result = names.includes('luigi');

// console.log(result);

//comparison operators

// let age = 25;

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'shaun';

// console.log(name == 'Shaun');
// console.log(name > 'Crystal');
// console.log(name > 'Shaun');

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');


//type conversion

// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(0);
// let result = Boolean('');


// console.log(result, typeof result);

// for loop:

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];
// for(let i = 0; i < names.length; i++) {
//     // console.log(i);
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

//while loops
// const names = ['shaun', 'mario', 'luigi'];
// // let i = 0;

// // while(i < 5){
// //     console.log('in loop:',i);
// //     i++;
// // }

// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

//do while  
// let i = 3;
// do {
//     console.log('value of i is: ',i);
//     i++;
// } while(i < 5);

// if statement
// const age = 20;

// if(age > 20){
//     console.log('you are over 20 years old');

// }
// const ninjas = ['shaun', 'ryu', 'chun-li','yoshi'];
// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// logical operators -OR || and AND && 

// const password = 'pas@11';

// if (password.length >= 12 && password.includes('@')){
//     console.log("password is very strong");
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('password is long enough');
// } else {
//     console.log('password is too short');
// }

// logical NOT (!)


// let user = false;

// if(!user){
//     console.log("user must be logged in to continue");
// }


// console.log(!true);
// console.log(!false);


// //break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] === 0){
//         continue
//     }
//     console.log('your score: ', scores[i]);
//     if (scores[i] === 100) {
//         console.log('Congrats, your score is the top score');
//     }
// }


// switch statement
// const grade = 'P';

// switch (grade) {
//   case "A":
//     console.log("you got an A");
//     break;
//   case "B":
//     console.log("you got an B");
//     break;
//   case "C":
//     console.log("you got an C");
//     break;
//   case "D":
//     console.log("you got an D");
//     break;
//   case "E":
//     console.log("you got an E");
//     break;
//     default: 
//     console.log('not a valid grade');
// }

// variables and block scope

// const age = 30;
// if(!false) {
//     const age = 40;
//     const name = 'shaun';
//     console.log("inside of code block: ", age, name);

//     if(true){
//         let age = 50;
//         console.log("inside 2nd code block: ", age);
//     }
// }
// console.log('outside of code block: ', age);

//function declaration
// function greet(){
//     console.log('hello world');
// }

// arguments & parameters
// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`Good ${time}! ${name}`);
// };

// // greet();
// // greet();
// // greet();

// // speak('mario', 'luigi');
// // speak('antony', 'morning');
// speak('luis');
// speak();

// const calcArea = function(radius){
//     return area = 3.14 * radius**2;
//     // console.log(`Area: ${area}`);
//     // return area;
// };

// const area = calcArea(20);
// console.log(`Area: ${area}`);

// const calcVol = function (area) {

// };

// calcVol(area);

// const calcArea = function (radius) {
//   return (area = 3.14 * radius ** 2);
// };

//arrow functions

// const calcArea = (pi, radius) => pi * radius ** 2 ;

// const area = calcArea(3.14, 5);
// console.log(`Area: ${area}`);

// arrow functions continued

// const greet = () => 'hello world';
// const greeting = greet();
// console.log(` ${greeting}`);


// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2)); 


// 
// var message = 'hello!';
// alert(message);
// message = 'Welcome to the worldwide Internet';
// alert(message);

// var visitorName =( prompt('what is you name?');
// console.log(visit)orName);
// var visitor = prompt('what is your name?');
// var message = 'Hello ' + visitor + ' Welcome TO TREEHOUSE, we\'re glad you joined us.' + ' Please come back again for more information.';

// message += ' remember to save your details on the platform';
// document.write(message);

// var passphrase = 'Open Sesame';
// document.write(passphrase.length);
// document.write(passphrase.toLowerCase());
// document.write(passphrase.toUpperCase());

// var stringsToShout = prompt('What should I shout?');
// var shout = stringsToShout.toUpperCase();
// shout += "!!!";
// alert(shout);

// seconds calculation

// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerMonth = 4;
// var monthsPerYear = 12;
// var weeksPerYear = 52;

// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// // document.write('There are ' + secondsPerDay + ' seconds in a day.');
// var yearsAlive = secondsPerDay * 24;
// document.write('I\'ve been alive for ' + yearsAlive + ' seconds');

// var HTMLBadges = prompt('How many HTML badges do you have?');
// var CSSBadges = prompt('How many CSS badges do you have?');
// var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
// alert('Wow! You have ' + totalBadges + 'badges!');


let nth_most_rate = (array, nthRarestTerm) => {
  return array.filter((n) => n == nthRarestTerm).length;
};

nth_most_rate([1, 2, 3, 4, 5], 3);
message = `the nth rarest item is ${nth_most_rate}`;
console.log(message);



const nth_most_rate = (list, n) => {
  const nth_Checker = {};
  list.forEach((number, index) => {
    nth_Checker[number] = 0;
    for (const numDuplicate of list) {
      if (numDuplicate != number) continue;
      if (numDuplicate == number) {
        nth_Checker[number] = nth_Checker[number] + 1;
      }
    }
  });
  let nthRaresList = [];
  for (const numberKeys in nth_Checker) {
    if (nthRaresList.includes(nth_Checker[numberKeys])) continue;
    nthRaresList.push(nth_Checker[numberKeys]);
  }
  let sortedOccurence = nthRaresList.sort();
  console.log(nth_Checker);
  const nthRareOccurence = sortedOccurence[n - 1];
  let nthMostRare = [];
  for (let n in nth_Checker) {
    if (nth_Checker[n] !== nthRareOccurence) continue;
    if (nth_Checker[n] == nthRareOccurence) {
      nthMostRare.push(n);
    }
  }
  let message = "";
  if (nthMostRare.length == 0) {
    message = `The ${n} most rare in the list is zero, probably because no number in the list appeared upto such times `;
  } else if (nthMostRare.length == 1) {
    message = `The ${n} most rare in the list is ${nthMostRare[0]} `;
  } else if (nthMostRare.length > 1) {
    message = `The ${n} most rare in the list are ${nthMostRare} `;
  }
  console.log(message);
  return message;
};

nth_most_rate([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 2);
