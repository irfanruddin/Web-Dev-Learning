var a = 10;
var b = 20;

if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}

var grade = 85;

if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 80) {
  console.log("verygood");
} else if (grade >= 70) {
  console.log("good");
} else {
  console.log("study hard");
}

var exp = 1;

switch (exp) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Working hour 9am to 6pm.");
    break;
  case 6:
    console.log("Working hour 9am to 1pm.");
    break;
  case 7:
    console.log("week off.");
    break;
  default:
    console.log("Invalid input.");
}
