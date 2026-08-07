/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/

const calculateShipping = (orderAmount, shippingFee = 60) => {
  // if(orderAmount>=1000){
  //   return "Free Shipping"
  // } else{
  //   return `Shipping Fee: ${shippingFee} Taka`
  // }

  // condition ? true : false
  return orderAmount >= 1000
    ? "Free Shipping"
    : `Shipping Fee: ${shippingFee} Taka`;
};
console.log(calculateShipping(1200));
console.log(calculateShipping(500));
console.log(calculateShipping(500, 100));