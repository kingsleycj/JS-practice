var questions = 4;
var questionsLeft = " [" + questions + " questions left]";
var name = prompt("What is you name?" + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var favApp = prompt(name + " what is your favorite app?" + questionsLeft);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";
var favStory = prompt(
  name + " What is your favorite content creator on that app?" + questionsLeft
);
questions -= 1;
questionsLeft = " [" + questions + " questions left]";

var time = prompt(
  name + " How long do you spend your time on that app?" + questionsLeft
);
alert("Alright! we are all done here. Thanks for your input.");

var story = name + " has a favorite app called " + favApp;
story += " and his favorite content creator is " + favStory;
story += " and he spends " + time + " hours on that app";

document.write(story);
