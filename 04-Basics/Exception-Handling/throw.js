//throw statement is used to create custom error using try...catch block of code

function checkAge(age) {
  if (age < 18) {
    throw "Age must be 18 or older."; // custom error if the age is below 18
  }
  return "You are allowed to proceed.";
}

try {
  let result = checkAge(21);
  console.log(result);
} catch (error) {
  console.error("Error:", error);
}
//Output: Error: Age must be 18 or older.
