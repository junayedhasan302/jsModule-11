/*
Task 10:  cloneAndUpdate(arr, index, newValue) — Spread 
(Immutable Array  
Update) Return a new array with the value at index replaced by newValue, 
without mutating the original array. 
Input:  cloneAndUpdate() 
Output: [5, 99, 15] 
(original array still [5, 10, 15]) 
*/

const cloneAndUpdate = (arr, index, newValue) => {
    const updatedArray = [...arr];          // Clone the original array using Spread Operator
    updatedArray[index] = newValue;         // Update the specified index in the cloned array
    return updatedArray;                    // Return the new array
};
const originalArray = [5, 10, 15];
const newArray = cloneAndUpdate(originalArray, 1, 99);
console.log("Original Array :", originalArray);
console.log("Updated Array  :", newArray);