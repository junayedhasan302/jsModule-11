/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.
const calculateTotal=(discount=0, ...prices)=>{
    let sum = prices.reduce(
        (accumulator, currentValue)=> accumulator+currentValue
    );
    // console.log(sum)
    let afterDiscount = sum-((sum*discount)/100);
    return afterDiscount;
}
console.log(calculateTotal(10,100,200,50,300));
console.log(calculateTotal(5,100,200,50,300));