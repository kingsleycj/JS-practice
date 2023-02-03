var message = "";
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = "<h2>Student: " + student.Name + "</h2>";
  report += "<p>Track: " + student.Track + "</p>";
  report += "<p>Achievements: " + student.Achievements + "</p>";
  report += "<p>Points: " + student.Points + "</p>";
  return report;
}

while (true) {
  search = prompt(
    'Search student records: type a name [Kingsley] (or type "quit" to end the search)'
  );
  if (search === null || search.toLowerCase() === "quit") {
    break;
  }
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (student.Name === search) {
      message = getStudentReport(student);
      print(message);
    }  else if ( student.Name !== search ){
    print('User data not available for this student');
  }
}
