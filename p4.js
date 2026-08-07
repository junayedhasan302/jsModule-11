/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/
const numbers = [1, 2, 3, 4];
// console.log(...numbers); // Output: 1 2 3 4

// Merge array using spread operator
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [30, 40, 50, 60, 70];
console.log("1st Array: ", arr1);
console.log("2nd Array: ", arr2);
const mergedArray = [...arr1, ...arr2];
console.log("1st arry + 2nd Array: ", mergedArray, "Length: ",mergedArray.length);

// // Remove duplicate values using set
// let uniqueArray = [];
// for (let i = 0; i < mergedArry.length; i++) {
//   if (!uniqueArray.includes(mergedArry[i])) {
//     uniqueArray.push(mergedArry[i]);
//   }
// }
// let uniqueArray = [...new set(mergedArray)];
let uniqueArray = Array.from(new Set(mergedArray));
console.log("Unique array: ",uniqueArray, "Length: ",uniqueArray.length);
// let uniqueValues = [...new set(mergedArry)];
