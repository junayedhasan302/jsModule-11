/*
Problem 2: Cart Total Calculator

You have an array of cart items, each with a name, price, and qty
(quantity). Calculate:
1. Total number of items
2. Total cost

Bonus: If the cart is null or undefined,
print "Total: 0 items, 0 Taka"
*/

const calculateCart = (cart) => {
    let itemCount = 0;
    let grandTotal = 0;

    if (!cart) {
        return "Total: 0 items, 0 Taka";
    }

    cart.forEach((item) => {
        itemCount += item.qty;
        grandTotal += item.price * item.qty;
    });

    return `Total: ${itemCount} items, ${grandTotal} Taka`;
};


const cart = [
    { name: "Keyboard", price: 1200, qty: 2 },
    { name: "Mouse", price: 700, qty: 3 },
    { name: "USB Cable", price: 250, qty: 4 },
    { name: "Pen Drive", price: 900, qty: 1 }
];

console.log(calculateCart(cart));
console.log(calculateCart(cart));
console.log(calculateCart([]));
console.log(calculateCart(null));
