/*
Task 4: swapValues(a, b) — Destructuring  
Return [b, a] using array destructuring assignment, no temporary variable. 
Input:   
swapValues(5, 10) 
Output: 
[10, 5]
*/

const swapValues = (a, b) => {
    [a, b] = [b, a];
    return [a, b];
};
console.log("Given Values: 5, 10");
console.log(`After Swapped: ${swapValues(5, 10)}`); // [10, 5]

console.log("Given Values: A, B");
console.log(`After Swapped: ${swapValues("A", "B")}`); // ["B", "A"]