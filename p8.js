/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: [a, b] = [b, a]
  Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
*/
// Swap
let a = 5;
let b = 10;
console.log("Before swapping: (a,b):-> ",a, b);
[b, a] = [a, b];
console.log("After swapping: (a,b):-> ",a, b);

// Rest Extractor
let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let [first, second, ...rest ] = nums
console.log("First element of array: ",first); 
console.log("SEcond element of array: ",second); 
console.log("Remaining Elements of the array: ",rest); 