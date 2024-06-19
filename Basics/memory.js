//Memory in javascript stack(primitive) and heap(non-primitive)

let myName = "Preetham";

let myNewName = myName;
myNewName = "Sandeep";

// console.log(myNewName);
// console.log(myName);

let obj = {
  email: "user@gmail.com",
  upi: "upi@124",
};

let obj1 = obj;

obj1.email = "user2@google.com";

console.log(obj1.email);
