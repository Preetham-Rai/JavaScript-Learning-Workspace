//Short circuit is the shortest path the compiler takes execute a code

//Using AND operator

/*Here in result the first condition is true so the program
 execution returned true and never went to second operation */

/*So in short circuit evaluation second function is only evaluated when the
 first function can't determine its value*/

//In AND operator
let results = false && someFuntion();
//In this case someFuntion() can't be evaluated because in AND first value is false

let value = true || someMethod();
//In this case someMethod() won't evaluate because first operand is true.

let test = false;
let isTrue = () => {
  //   console.log("this is true");
};

let isFalse = () => {
  //   console.log("this is false");
};

if (!test) {
  isFalse();
}

function userName(name) {
  //   name = name || "null";
  //   console.log(`Hello, Welcome to our channel ${name}`);
  if (!name) {
    console.log(`Hello, Welcome to our channel ${name}`);
  } else {
    console.log("Enter a valid User Name");
  }
}

userName();
// userName("Sandeep");
