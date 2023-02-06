'use strict';

function greet (name = 'Dave', timeOfDay = 'Night'){
    // name = name || 'Guil';
    // timeOfDay = timeOfDay || 'Day'
    console.log(`Good ${timeOfDay}, ${name}!`)
}
greet(undefined, 'Morning')

function myFunction (name, flavor){
    console.log(`${name} really likes ${flavor} ice cream`)
}

let args = ['David', 'Vanilla']
myFunction(...args)

let toyBox = { item1: 'car', item2: 'ball', item3: 'frisbee'}
let {item1, item2} = toyBox;
console.log(item1)

function submit(name, comments, rating = 5){
    let data = {name, comments, rating};

    for (let key in data){
        console.log(`${key}: ${data[key]}`)
    }
}

submit('English', 'Great Course!')