//Syntax of arrow function
// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

const myFunction = [1, 2, 3, 4, 5];
//every element should be multiply by its number
let results = myFunction.map((ele) => ele * ele); // use of arrow function
console.log(results); // Output: [ 1, 4, 9, 16, 25 ]

//Arrow functions can be async by prefixing the expression with the async keyword
//rest, default and destructuring paramenter works in arrow function

const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed
// block body is {} curly braces

/*Object inside as follows
(a) =>({
    key:value,
})
    using paranthesis to wrap the object
*/

//Arrow function doesn't have their own this keyword so it shouldn't be used as methods

//While comparing with the operation arrow has very low precedence so it should be wrapped around ()
// callback || (() => {})
