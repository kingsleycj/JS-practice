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
var questionsCorrect = [];
var questionsWrong = [];

// function print(message) {
//     document.write(message);
// }

function buildList(array) {
    var listHTML = '<ol>';
    for (var i = 0; i < array.length; i++) {
    listHTML += "<li>" + array[i] + "</li>";
    }
    listHTML += "</ol>";
    return listHTML;
}

for (var i = 0; i < questions.length; i++) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer ) {
        correctAnswers += 1;
        questionsCorrect.push(question);
    } else {
        questionsWrong.push(question);
    }
}

html = "You got " + correctAnswers + " question(s) right";
html += '<h2> You got these questions correct: </h2>';
html += buildList(questionsCorrect);
html += '<h2>You got these questions wrong: </h2>';
html += buildList(questionsWrong);
print(html);


