const arr = ["Naruto", "luffy", "Ichigo"];
const arr2 = ["Sasuke", "Zoro", "Uriyu"];

let newArr = [...arr2, ...arr]; // spread operator to add two arrays together into one
// console.log(newArr);
let array = [1, 3, 45, [2, 2], 5, [2, (4)[(1, 3)]]];

let changeArray = array.flat(Infinity);

// console.log(changeArray);

//with() method is used to change the value from the array without mutating the original array

let numbers = [1, 2, 3, 4, 5];

let newArray = numbers.with(0, 0); //[ 0, 2, 3, 4, 5 ] it works without changing the new array

console.log(newArray);
