/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/

let user1 = {
  name: "Akash",
  address: {
    city: "Comilla",
  },
};
let user2 = {
  name: "Robin",
  // address: {},
};

const getCity = (user) => {
  return user.address?.city;
};

console.log(getCity(user1));
console.log(getCity(user2));