'use strict'

let classroom = new Map() 

let stevenJ = { name: "Steven", age: 22 },
  sarah = { name: "Sarah", age: 23 },
  stevenS = { name: "Steven", age: 22 };

  classroom.set('stevenJ', stevenJ);
  classroom.set('sarah', sarah);
  classroom.set("stevenS", stevenS);

//   console.log('classroom size:', classroom.size);
// classroom.clear()
//   console.log("classroom size:", classroom.size);


// if (classroom.has('stevenJ')) console.log("stevenJ is in the classroom");
// if (classroom.has('sarah')) console.log("sarah is in the classroom");
// if (classroom.has('stevenS')) console.log("stevenS is in the classroom");


// classroom.delete('sarah')
// console.log('sarah: ', classroom.get('sarah'))

// for (let student of classroom){
//     console.log(`'${student[0]}': ${student[1].name} is ${student[1].age} years old`)
// }

class Student {
    constructor({ name, age, interestLevel = 5}){
        this.name = name;
        this.age = age;
        this.interestLevel = interestLevel ;
        this.grades = new Map();
    }
}

let joel = new Student({ name: 'joel', age: 25 })
let esther = new Student({ name: 'esther', age: 22 })

esther.grades.set('History', 'B')
esther.grades.set("Math", "A");

let sarahG = Array.from(esther.grades)

console.log('esther\'s grades: ', sarahG)

// console.log(joel)
// console.log(esther)
