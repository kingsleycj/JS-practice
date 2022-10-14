var correct = 0;
var answer1 = prompt("Name a programming language that's also a gem");
if (answer1.toUpperCase() === "RUBY") {
  correct += 1;
}
var answer2 = prompt("Name a programming language that's also a snake");
if (answer2.toUpperCase() === "PYTHON") {
  correct += 1;
}
var answer3 = prompt("What language do you use to style web pages?");
if (answer3.toUpperCase() === "CSS") {
  correct += 1;
}
var answer4 = prompt(
  "What language do you use to build the structure of web pages?"
);
if (answer4.toUpperCase() === "HTML") {
  correct += 1;
}
var answer5 = prompt(
  "What language do you use to add interactivity to a website? "
);
if (answer5.toUpperCase() === "JAVASCRIPT") {
  correct += 1;
}

document.write("you got " + correct + " out of 5 questions.");
if (correct === 5) {
  document.write("<strong> You earned a Gold Crown </strong>");
} else if (correct <= 3) {
  document.write("<strong> You earned a Silver crown </strong>");
} else if (correct >= 1) {
  document.write("<strong> You earned a Bronze crown </strong>");
} else {
  document.write(
    "<strong> You earned no crown. You need to study harder </strong>"
  );
}
