/*
  Problem 2: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/

const getGrade = (mark) => {
  // if (typeof mark != "number") {
  //   return "Invalid";
  // }

  // if (mark >= 90) {
  //   return "A+";
  // } else if (mark >= 80) {
  //   return "A";
  // } else if (mark >= 60) {
  //   return "B+";
  // } else {
  //   return "Fail";
  // }

  // Ternary operator -> condition ? true : false
  // Nested operator
  return typeof mark != "number"
    ? "Invalid"
    : mark >= 90
      ? "A+"
      : mark >= 80
        ? "A"
        : mark >= 60
          ? "B+"
          : "Fail";
};
console.log(getGrade(99));
console.log(getGrade(85));
console.log(getGrade(33));
console.log(getGrade("Junayed")); // inv
console.log(getGrade([])); // inv
