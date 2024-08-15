//Function reference and function execution
//function reference is calling the function without paranthesis to actually referencing it to some other function

function sayHello() {
  console.log("Hello, World!");
}

let greet = sayHello; // Function reference (no parentheses)
greet(); // Executes the function, outputs: Hello, World!

//A common use of function references is passing them as arguments to other functions (higher-order functions).

function greet(name) {
  console.log("Hello, " + name);
}

function callFunctionWithJohn(func) {
  func("John");
}

callFunctionWithJohn(greet); // Outputs: Hello, John
