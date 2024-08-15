//Array.prototype.map() method of an array
//The arguement that given in the map() function iterates on every element in the given array to create new array

//Syntax
// map(callbackFn);
// map(callbackFn, thisArg);

// callbackFn(element, index, array); //callback functoin following arguments

//Mapping an array of numbers to an array of square root using map

let number = [2, 4, 5, 8];
let sqrt = number.map((e) => Math.sqrt(e)); // this gives the square root of the value ex: sqrt(9) = 3
// console.log(sqrt);

//Using map() method we are going to reformat array of object

let obj = [
  { key: 1, value: "a" },
  { key: 2, value: "b" },
  { key: 3, value: "c" },
];

let newObj = obj.map(({ key, value }) => `${key} : ${value}`);

console.log(newObj);
