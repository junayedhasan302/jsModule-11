/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/

const findExpensiveProduct = (product) =>{
    const keys = Object.keys(product);
    let highest = 0;
    let ExpensiveProductName = "";
    for(let key of keys){
        if(highest < product[key] ){
            highest = product[key];
            ExpensiveProductName = key;
        }
    }
    return ExpensiveProductName;
}
let products = { pen: 20, book: 150, bag: 500, camera: 60000};
console.log(findExpensiveProduct(products));