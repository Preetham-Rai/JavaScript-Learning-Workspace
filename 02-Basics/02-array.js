const arr = ["Naruto", "luffy", "Ichigo"];
const arr2 = ["Sasuke", "Zoro", "Uriyu"];

let newArr = [...arr2, ...arr]; // spread operator to add two arrays together into one
// console.log(newArr);
let array = [1, 3, 45, [2, 2], 5, [2, (4)[(1, 3)]]];

let changeArray = array.flat(Infinity);

console.log(changeArray);
