// var r1 = require("readline");
// var prompts = r1.createInterface(process.stdin, process.stdout);
// prompts.question("Enter your Name: ", function(username){
//     prompts.question("Enter your Email Address: ", function(email){
//         prompts.question("Enter your Contact Address: ", function(address){
//             prompts.question("Enter your Phone Number\n(make sure its 11 digits): ", function(mobile){
//                 var message = ""; 
//                 if (mobile.length >= 10){
//                     message = "\n\n Thank You! " + username + "\n\n Your details have been stored,  You can make your payment and expect delivery in 2 day(s)" +
//                     "\n\n-------------------------------------------------"+
//                     "\n\n Username              : " + username + 
//                     "\n\n Email                 : " + email + 
//                     "\n\n Contact Address       : " + address + 
//                     "\n\n Phone Number          : " + mobile +
//                     "\n\n-------------------------------------------------";
//                 } else {
//                     message = "Your Phone number is " + mobile + " , and its not up to 11 digits, please restart and input 11  digits of your phone number ";
//                 }
//                 console.log(message);
//             })
//         })
//     })
// });


/**
 *  !  remember to dot ur i's and cross ur t's
 *  ? Are you sure you want to continue with this project
 *  TODO  GET THAT CLASSES OVER WITH
 * @param  myParameter for this project 
 */

// defining an empty class
class Human {
    numberOfEyes = 2
    hairColor = 'black'
    static numberOfLegs = 2
    cry () {
        console.log("I am crying!")
    }
}
// instantiating an object
const human = new Human()

human.hairColor = "pink";
Human.numberOfLegs = 11;

console.log(human, Human);
// adding methods to classes
