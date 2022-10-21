var message = "";
var student;

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i++) {
    student = students[i];
    message += '<h2>Student: ' + student.Name + '</h2>';
    message += '<p>Track: ' + student.Track + '</p>';
    message += '<p>Achievements: ' + student.Achievements + '</p>';
    message += '<p>Points: ' + student.Points + '</p>';
}

print(message);s