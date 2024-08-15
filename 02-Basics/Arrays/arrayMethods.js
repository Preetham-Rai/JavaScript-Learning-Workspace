//Some of the array method use cases
//.length property is to check the length of the property. omits total values not the indexes

//toString() methods converts array into string using comma saperated values
let arr = ["apple", "banana", "mango", "orange"];
//console.log(arrTostr.toString()); apple,banana,mango,orange

//at() method of array
//console.log(arr.at(1)); banana

//join() joins the element into string and can add delimiter
//console.log(arr.join("-")); apple-banana-mango-orange

//pop(), push(), shift(), unshift();
// delete() method is not used because it leaves undefined holes in the array which takes up spaces

//concat() method is used to combine elements

//flat() method is used to conver multidimensional array into single array

let array = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

//console.log(array.flat()); [1, 2, 3, 4, 5, 6, 7, 8];

let newarr = [1, 2, 3, 5, 6, 6, 7, 8, 8];
console.log("A:", newarr);
//use of slice operator
console.log("Slice", newarr.slice(0, 3)); //number counts as index

console.log("B:", newarr);
console.log("Splice", newarr.splice(0, 3));
console.log("C:", newarr);
// A: [ 1, 2, 3, 5, 6, 6, 7, 8, 8]
// Slice [ 1, 2, 3 ]
//B: [1, 2, 3, 5, 6, 6, 7, 8, 8]
//Splice [ 1, 2, 3 ]
//C: [ 5, 6, 6, 7, 8, 8 ]
//splice method extracts elements from the original array
