// function printList( list ) {
//     var listHTML = '<ol>';
//     for (var i = 0; i < list.length; i++) {
//         listHTML += '<li>' + list[i] + '</li>';
//     }
//     listHTML += '<ol>';
//     print(listHTML);
// }

// function print(html) {
//     document.write(html);
// }

/*
class Rectangle {
    constructor (_width, _height, _color) {
        console.log('The rectangle is being created!');

        this.height = _height;
        this.width = _width;
        this.color = _color;
    }
    getArea(){
        return this.width * this.height;
    }
    printDescription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`);
    }
}

let myRectangle1 = new Rectangle(6, 7, "red");
let myRectangle2 = new Rectangle(9, 3, "blue");

myRectangle1.printDescription();
console.log(myRectangle1.getArea());
myRectangle1.printDescription();
console.log(myRectangle2.getArea());

*/

// class square {
//     constructor(_width) {
//         this.width = _width;
//         this.height = _width;
//     }
//     get area(){
//         return this.width * this.height;
//     }
// }

// let square1 = new square(25);
// console.log(square1.area)




var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;   
    }
};
