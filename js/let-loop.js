'use strict';

const { set } = require("express/lib/application");

// function initLoop(){
//     function doLoop(x){
//         i = 3
//         console.log("Loop : ", x)
//     }
//     for(let i = 0; i < 10; i++){
//         doLoop (i + 1);
//     }
// } 

// initLoop() 

let teachers = [
    {name: 'Ken', comment: 'Amazing!', rating: 7},
    {name: 'James', comment: 'Astounding!', rating: 8},
    {name: 'Dave', comment: 'Astonishing!', rating: 8.4},
    {name: 'John', comment: 'Accelerating!', rating: 6},
    {name: 'Eliezar', comment: 'Accepting!', rating: 6},
    {name: 'Nick', comment: 'Automating!', rating: 5},
    {name: 'Andrew', comment: 'Arm-chair-ing!', rating: 3}
]

// teachers.forEach(teacher => {
//     for (let teacher of teachers){
//     console.log(`teachers names: ${teacher.name}`)
//     if (teacher.name === 'Nick'){
//         console.log(teacher.comment)
//         break;
//     }
// }

let classroom  = new Set()

let stevenJ = { name: "Steven", age: 22 },
  sarah = { name: "Sarah", age: 23 },
  stevenS = { name: "Steven", age: 22 }

classroom.add(stevenJ); 
classroom.add(sarah);
classroom.add(stevenS);

if (classroom.has(stevenJ)) console.log('stevenJ is in the classroom')
if (classroom.has(sarah)) console.log('sarah is in the classroom')
if (classroom.has(stevenS)) console.log("stevenS is in the classroom");

console.log(`classroom size: ${classroom.size}`)

let arrayOfStudents = Array.from(classroom)
console.log(arrayOfStudents)

let alumni = new Set(arrayOfStudents)
console.log('alumni size: ', alumni.size)
