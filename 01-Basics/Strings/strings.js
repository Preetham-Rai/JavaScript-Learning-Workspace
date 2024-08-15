/*Strings are useful for holding data that can be represented in text form.
 Some of the most-used operations on strings are to check their length,
  to build and concatenate them using the + and += string operators, 
  checking for the existence or location of substrings with 
the indexOf() method, or extracting substrings with the substring() method. */

// new String() creates string as object instance

let str = "Hello "; //includes spaces

// console.log(str.length);

//String Methods
// String.length property returns length
// Extracting Strings characters methods charAt(position), charCodeAt(position), at(position)[This method is es2022]

// console.log(str.at(4)); //it can be used to access negative value
// console.log(str.charAt(0));

//Extracting String Parts
// slice(start, end), substring(start, end), substr(start, length)[This is not used now]
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);

let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// if it is  nagative it counts from the end of the string
let part = text.substring(7, 13); // substring() counts negative as 0th index
console.log(part);

//Converting strings toUpperCase() and toLowerCase() - only works on strings

//concat() method is used to join two string
let str1 = "Hello";
let str2 = "World";

let string = str1.concat(str2);

// console.log(string);

//trim() method removes white spaces from both side of the string(beginning and end) not in the middle
//trimStart() and trimEnd()

//repeat(count) method makes copy of string
let repeat1 = "hello";
// console.log(repeat1.repeat(2)); //hellohello

//replace(replaceWith, replace);

//COnverting string into Arrays
//use of split(delimeter) method
