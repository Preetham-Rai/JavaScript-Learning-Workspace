//Sorting all the elements in the array
//use of sort() method

let array = ["banana", "mango", "chikku", "apple"];

// console.log(array.sort());

let newArray = array.reverse();

let changeArray = newArray.toString().toUpperCase().split(",").sort();

// console.log(changeArray);

//toSorted() and sort() are same but toSorted() is safe because it sort the array and create a new array without changing original array
//sort() method alters original array itself

//Same goes for toReversed()

//toSorted() and toReversed() method introduced in ES2023 for safer method of array
