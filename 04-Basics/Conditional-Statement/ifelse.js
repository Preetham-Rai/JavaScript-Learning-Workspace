//In if-else statement only one condition will be executed based upon the truthy and falsy value
// function myFunction(a, b) {
//   if (a > b) {
//     console.log(`The number ${a} is greater than ${b}`);
//   } else {
//     console.log(`The number ${b} is greater than ${a}`);
//   }
// }

// myFunction(10, 20)

// let userLoggedIn = false;

if ((userLoggedIn = "0")) {
  console.log("Welcome User!");
} else {
  console.log("You have to login to enter");
}

/*6. Best Practices:
Clarity: Always ensure your conditions are clear and easy to understand.
Nested Conditions: Avoid deeply nested if-else statements, as they can make the code hard to read.
Consider refactoring or using logical operators (&&, ||) where appropriate.
Default Case: When using multiple else if statements, 
it's good practice to include an else block to handle any cases that don't match the previous conditions. */

/*Why the else statement delivers false:
The else block is executed only when the condition in the if statement is falsy.
It acts as a fallback for cases where the if condition does not hold true. */
