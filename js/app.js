/* 
var user = prompt('Enter a maximum random integer: ');
var topNumber = parseInt(user);
var user2 = prompt('Enter a starting value: ');
var bottomNumber = parseInt(user2);
var randomNumber = Math.floor(Math.random(user) * (topNumber - bottomNumber +1)) + bottomNumber;
var message = "<p>" + randomNumber + ' is a number between 1 and ' + topNumber + ".</p>";
document.write(message);

*/

// function getArea(width, height, unit) {
//     var area = height * width ;
//     return area + " " + unit;
// }
// console.log(getArea(10, 20, 'sq ft'));

// function nth_most_rate(list, n) {
//   var mf = 1;
//   var m = 0;
//   var item;
//   for (var i = 0; i < nth_most_rate.length; i++) {
//     for (var j = i; j < nth_most_rate.length; j++) {
//       if (nth_most_rate[i] == nth_most_rate[j]) m++;
//       if (mf < m) {
//         mf = m;
//         item = nth_most_rate[i];
//       }
//     }
//     m = 0;
//   }
//   return item;
// }
// nth_most_rate([1, 5, 2, 4, 3, 2, 1, 4, 5], 1);

// console.log(item + " ( " + mf + " times ) ");

// find nth rarest term in an array using nodejs?
/*
function mode(array, n)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
console.log(mode([1,2,3,2,3,4,5,5], 5));
*/

//  Create a function that returns the nth-rarest term  in an array in nodejs?
// function nthElementFinder(a, n) {
//     const result = [];
//     let i = n - 1;
//     while (i < a.length) {
//         result.push(a[i]);
//         i += n;
//     }
//     return result;
// }

// console.log(nthElementFinder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// a program to display a name 50 times?
// for (var i = 1; i <= 50; i++)
// {
//    console.log("Kingsley Nweke");
// }

// function myName() {
// //   var name = "Kingsley Nweke";
//   for (var i = 1; i <= 50; i++) {
//     return 'Kingsley Chijioke Nweke';
//   }
// }
// console.log(myName());

/*
const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myTextInput2 = document.getElementById("myTextInput2");
const myBody = document.getElementById('myBody');
const myReset = document.getElementById('myReset');
const myReset2 = document.getElementById("myReset2");
const style1 = document.getElementById('style1');
const changeFont = document.getElementById('changeFont');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

myBody.addEventListener('click', () => {
    myBody.style.backgroundColor = myTextInput2.value;
});

myReset.addEventListener('click', () => {
    myHeading.style.color = 'black';
});

myReset2.addEventListener("click", () => {
    myBody.style.backgroundColor = 'white' ;
});

changeFont.addEventListener('click', () => {
    myHeading.style.fontFamily = style1.value;
});
*/

// getting a handle on the DOM

/*
const myList = document.getElementsByTagName('li');
for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = 'purple';
}

const myList1 = document.querySelectorAll(".error-not-purple");
for (let i = 0; i < myList1.length; i++) {
  myList1[i].style.color = "red";
}

const evens = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < evens.length; i++) {
  evens[i].style.backgroundColor = "lightgray";
}
*/
const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input.description");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const listUl = document.querySelector('ul');
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");
// const removeItemButton = document.querySelector("button.removeItemButton"); //REMOVING REMOVE BUTTON QUERY SELECTOR


// utilizing event bubbling for better efficient event targeting
/*
const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", () => {
      listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });

    listItems[i].addEventListener("mouseout", () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}
*/

function attachListItemButtons () {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
}

listUl.addEventListener("click", (event) => {
    if (event.target.tagName == 'BUTTON') {
        // event.target.textContent = event.target.textContent.toUpperCase();
        if (event.target.className == 'remove') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className == 'up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
        if (event.target.className == 'down') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
    }
});

// removed because traversing the node eliminates the need for the lines of code below
// listDiv.addEventListener("mouseout", (event) => {
//     if (event.target.tagName == "LI") {
//       event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });

// targeting the events and returning them to the console
// document.addEventListener('click', (event) => {
//     console.log(event.target)
// });

toggleList.addEventListener("click", () => {
    if (listDiv.style.display == "none") {
        toggleList.textContent = "Hide list";
        listDiv.style.display = "block";
    } else {
        toggleList.textContent = "Show list";
        listDiv.style.display = "none";
    }
});

descriptionButton.addEventListener("click", () => {
  descriptionP.innerHTML = descriptionInput.value + ":";
  descriptionInput.value = "";
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li','button');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = "";
});


// REMOVING REMOVE BUTTON HANDLER BECAUSE THE CODE HAS BEEN MODIFIED
// removeItemButton.addEventListener('click', () => {
//         let ul = document.getElementsByTagName("ul")[0];
//         let li = document.querySelector("li:last-child");
//         ul.removeChild(li);
// });