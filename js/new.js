// // var r1 = require("readline");
// // var prompts = r1.createInterface(process.stdin, process.stdout);
// // prompts.question("Enter your Name: ", function(username){
// //     prompts.question("Enter your Email Address: ", function(email){
// //         prompts.question("Enter your Contact Address: ", function(address){
// //             prompts.question("Enter your Phone Number\n(make sure its 11 digits): ", function(mobile){
// //                 var message = ""; 
// //                 if (mobile.length >= 10){
// //                     message = "\n\n Thank You! " + username + "\n\n Your details have been stored,  You can make your payment and expect delivery in 2 day(s)" +
// //                     "\n\n-------------------------------------------------"+
// //                     "\n\n Username              : " + username + 
// //                     "\n\n Email                 : " + email + 
// //                     "\n\n Contact Address       : " + address + 
// //                     "\n\n Phone Number          : " + mobile +
// //                     "\n\n-------------------------------------------------";
// //                 } else {
// //                     message = "Your Phone number is " + mobile + " , and its not up to 11 digits, please restart and input 11  digits of your phone number ";
// //                 }
// //                 console.log(message);
// //             })
// //         })
// //     })
// // });


// /**
//  *  !  remember to dot ur i's and cross ur t's
//  *  ? Are you sure you want to continue with this project
//  *  TODO  GET THAT CLASSES OVER WITH
//  * @param  myParameter for this project 
//  */

// // defining an empty class
// class Human {
//     numberOfEyes = 2
//     hairColor = 'black'
//     static numberOfLegs = 2
//     cry() {
//         console.log("I am crying!")
//     }
//     displaySelf() {
//         console.log(this, Human.numberOfLegs)
//     }
//     static accessStatic(){
//         console.log(Human.numberOfLegs);
//     }
// }
// // instantiating an object
// const human = new Human()

// human.hairColor = "pink";
// Human.numberOfLegs = 11;

// // console.log(human, Human);
// // adding methods to classes

// human.displaySelf()
// // human.accessStatic();
// Human.accessStatic()


// INHERITANCE
// class Mammal {
//     numberOfEyes = 2

//     eat () {
//         console.log('I am eating!')
//     }
// }

// const mammal = new Mammal()
// // mammal.eat()

// class Human extends Mammal {
//     numberOfLegs = 2
// }

// const human = new Human()
// // human.eat()

// class Bird extends  Mammal{
//     hasFeather = true
// }
// const dove = new Bird()
// console.log(dove.hasFeather)

class Mammal {
    constructor(){
        if (this.constructor === Mammal){
            throw new Error ('Mammal cannot be called or instantiated')
        }
    }
}

class Human extends Mammal {
    run (){
        console.log('This can run')
    }
}

const human = new Human();

human.run()

// POLYMORPHISM
class Shape {
    constructor(){
        if (this.constructor === Shape){
            throw new error ('please implement this instead')
        }
    }
    area(){
        throw new error('This cannot be implemented');
    }
}

class Circle extends Shape {
    constructor(radius){
        super()
        this.radius = radius
    }
    area() {
        const area = Math.PI * (this.radius **2)
        return area
    }
}

const circle = new Circle(9)
// console.log(circle.area()) 

class Square extends Shape{
    constructor(length){
        super()
        this.length = length
    }
    area(){
        return this.length * this.length
    }
}

const square = new Square(4)
console.log(square.area())