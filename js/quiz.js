var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many letters of the alphabet do we have?', 27]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;


function print(message) {
    document.write(message);
}

for (var i = 0; i < questions.length; i++) {
    question = questions[i][0];
    // answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === questions[i][1]) {
      correctAnswers += 1;
    }
}

html = "You got " + correctAnswers + " question(s) right";
print(html);