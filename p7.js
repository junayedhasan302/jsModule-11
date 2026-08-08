/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example:  -> extract name as
  userName, default age = 18 if missing
*/
const responseExtractor = (obj) => {
  const {
    user: { name: userName, age = 18 },
  } = obj;
  // console.log(userName, age);
  return {
    userName, 
    age,
  };
};
console.log(responseExtractor({ user: { name: "Rafi", age: 22 } }));
console.log(responseExtractor({ user: { name: "Rafi", age: 25 } }));
console.log(responseExtractor({ user: { name: "Nishat" } }));

// const student = {
//     name: "Junayed",
//     age: 22,
//     department: "CSE"
// };

// const { name, age, department } = student;
// console.log(name);       // Junayed
// console.log(age);        // 22
// console.log(department); // CSE

// const { name: studentName, age: studentAge } = student; // If i change the prop name
// console.log(studentName); // Junayed
// console.log(studentAge);  // 22
// console.log(department); // CSE
