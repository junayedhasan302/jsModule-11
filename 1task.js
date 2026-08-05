/*
Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters
Return the final bill after tax is applied. Default tax rate is 5% when not provided.
Input:
calculateBill(1000)
Output:
1050

*/
// // General Function
// function calculateBill(amount, taxRate = 0.05){
//     let tax = amount*taxRate;
//     return amount+tax;
// }

// ES6 --> Arrow Function
const calculateBill = (amount, taxRate = 0.05) => amount + (amount * taxRate);
console.log(calculateBill(1000, .5));
console.log(calculateBill(1100));
console.log(calculateBill(1000, 0.10));
console.log(calculateBill(2000));