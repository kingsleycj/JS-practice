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
// console.log(square.area())

// ENCAPSULATION
class Customer {
    #create (){
        console.log('I am creating myself')
    }
    createSelf(){
        this.#create()
    }
}

const ezeh = new Customer()
// ezeh.createSelf()



// An Abstract class where all other classes will be referenced from
class Animal {
    #animalName;
    #phylum;

    // constructor function that will accept the animalName and Phylum as parameters
    constructor(animalName, phylum) {
        if (this.constructor === Animal) {
        throw new Error("This class cannot be called or instantiated");
        }
        this.#animalName = animalName;
        this.#phylum = phylum;
    }
// a method to return the name of the animal
    getAnimalName() {
        return this.#animalName;
    }

    setAnimalName() {
        this.#animalName = animalName;
    }
    getPhylum() {
        this.#phylum;
    }

    warmBlooded() {
        this.warmBlooded = true;
    }

    coldBlooded() {
        this.coldBlooded = true;
    }

    listProperties() {
        throw new Error("This method cannot be implemented");
    }

    withBackbone() {
        this.withBackbone = true;
    }

    withoutBackbone() {
        this.withoutBackbone = true;
    }
}


class Aves extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
        this.setanimalName();
        this.phylum;
        this.withBackbone();
        this.warmBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Mammal extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
        this.setAnimalName();
        this.getPhylum();
        this.withBackbone();
        this.warmBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Arthropoda extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
        this.getAnimalName();
        this.getPhylum();
        this.withoutBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Fish extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
        this.getAnimalName();
        this.getPhylum();
        this.withBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Amphibia extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
        this.getAnimalName();
        this.getPhylum();
        this.withBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

class Reptiles extends Animal {
    constructor(animalName, phylum) {
        super(animalName, phylum);
        this.getAnimalName();
        this.getPhylum();
        this.withBackbone();
        this.coldBlooded();
    }

    listProperties() {
        console.log(this);
    }
}

const aves = new Aves("Bird", "Aves");
const mammal = new Mammal("Cat", "Mammal");
const arthropoda = new Arthropoda("Butterfly", "Arthropoda");
const fish = new Fish("Tilapia", "Fish");
const amphibia = new Amphibia("Toad", "Amphibia");
const reptiles = new Reptiles("Turtle", "Reptiles");

aves.setAnimalName("Bird");
mammal.setAnimalName("Cat");
fish.setAnimalName("Tilapia");
amphibia.setAnimalName("Toad");
reptiles.setAnimalName("Turtle");

console.log("\nCLASSIFICATION OF THE ANIMAL KINGDOM\n");

console.log(aves.getAnimalName());
aves.listProperties();

console.log(mammal.getAnimalName());
mammal.listProperties();

arthropoda.setAnimalName();
console.log(arthropoda.getAnimalName());
arthropoda.listProperties();

console.log(fish.getAnimalName());
fish.listProperties();

console.log(amphibia.getAnimalName());
amphibia.listProperties();

console.log(reptiles.getAnimalName());
reptiles.listProperties();
