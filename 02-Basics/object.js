const userOne = {
  name: "Preetham",
  "full name": "Preetham Rai",
  age: 23,
  email: "preetham.rai@something.com",
  isLoggedIn: false,
};

const userTwo = {
  name: "Sandeep",
  "full name": "Sandeep Rai",
  age: 28,
  email: "sandeep.rai@something.com",
  isLoggedIn: false,
};

// console.log(userOne);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 1, d: 2 };

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);
