//Handeling exception is a way of finding error and display it regards other block of code keep wokring

let a = 10;
let b = "20";
//try and catch block is used to handle error in debugging
//try block is used to try to execute code
try {
  if (typeof a !== typeof b) {
    throw new Error(`This is an error`);
  }
  let c = a + b;
  console.log(`The sum total value of a + b is ${c}`);
  //catch is used to catch whatever error arises is the try block using custome throw error message in acutal code block
} catch (error) {
  //by default error parameter to log out the real error
  console.log(error);
}

let pi = Math.PI;
console.log(`The value of pi is ${pi}`);
