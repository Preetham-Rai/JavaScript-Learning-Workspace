// const arr = [1, 2, 3, 4, 5];

// // arr.push(6);
// // arr.pop();

// // arr.unshift(10);

// // arr.shift(2);

// // console.log(arr.includes(1));
// // let myArr = arr.join();
// // console.log(myArr);

// let newArr = arr.slice(1, 4);

// console.log(newArr);
// console.log(arr);

// let newArr1 = arr.splice(1, 4);
// console.log(newArr1);
// console.log(arr);

// let arr = [5]; // just in element

// let array = new Array(5); // new keyword Array created 5 elements
/* */
let array = ["Apple", "Mango", "Orange", "Peach"];
//To access the last element from an array we can use length-1 method
// console.log(array[array.length - 1]);
//we can use at() method
// console.log(array.at(-1));
/* */
console.log(array); // [ 'Apple', 'Mango', 'Orange', 'Peach' ]
let shift = array.shift();
let unshift = array.unshift(array[2]);

console.log(shift); //Apple;
console.log(unshift); //4;
console.log(array); //["Peach", "Mango", "Orange", "Peach"];

//pop and push are faster than shift and unshift

let arr1 = new Array(5);

let newArray = arr1.unshift("Good boy"); //"Good boy" will be added to arr1 not the newArray

console.log(newArray);
console.log(arr1);
