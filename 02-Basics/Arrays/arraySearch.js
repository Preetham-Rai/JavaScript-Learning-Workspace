//array methods that use for searching elements
const fruits = ["Apple", "Orange", "Apple", "Mango"];
//indexof() method
//console.log(fruits.toString().toLowerCase().split(",").indexOf("orange"));
//Array.lastIndexOf()
//Array.includes()

//find()

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  //   console.log(value > 18);
}
// false
// false
// false
// true
// true
//retunrs the value which has first index pf element which is greater than 18
//Same goes for firstIndex() method as well

const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
// Output : index 3
