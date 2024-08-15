//This is advanced method to search strings in the data of strings
//indexof() method returns the position of the string value

/* The indexOf() method returns the index (position) of the first occurrence of a string in a string,
 or it returns -1 if the string is not found: */

let str = "Hello this is the tutorial of string searching tutorial";

let string = str.indexOf("tutorial"); //it starts from 18th position in the sentence
let str2 = str.lastIndexOf("tutorial"); // basically there should be 2 tutorial string in the sentence
// console.log(string); Output: 18
// console.log(str2);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

//includes() this method return boolean value

// console.log(str.includes("this"));//case sensitive

//The startsWith() method returns true if a string begins with a specified value.

let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
