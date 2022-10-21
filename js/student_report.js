var message = "";
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

while (true) {
  search = prompt(
    'Search student records: type a name [Kingsley] (or type "quit" to end the search'
  );
  search = search.toLowerCase();
  if (search === "quit") {
    break;
  } else if (search === student.Name[i]) {
    print();
  }
}

for (var i = 0; i < students.length; i++) {
    student = students[i];
    message += '<h2>Student: ' + student.Name + '</h2>';
    message += '<p>Track: ' + student.Track + '</p>';
    message += '<p>Achievements: ' + student.Achievements + '</p>';
    message += '<p>Points: ' + student.Points + '</p>';
}


print(message);