/* In JavaScript Addition sign(+) is used to add number and concat strings 
So except + all the other numeric operation converets string into number
*/

//NaN is javascript reserve keyword which indicates its not a number;

// let x = 100 / "Apple";
// // console.log(isNaN(x)); true

// let x = 10;
// console.log(isNaN(x)); false

// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
let number = 123456;
number.toExponential(5); // 1.23456e+5
// toFixed()	Returns a number written with a number of decimals
let num = 234566;
num.toFixed(2); //234566.00
// toPrecision()	Returns a number written with a specified length
let x = 9.656;
x.toPrecision();
x.toPrecision(2); //9.7
x.toPrecision(4);
x.toPrecision(6);
// valueOf()	Returns a number as a number
