//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
//providing a way to represent variadic functions in JavaScript.

function totalSum(...args) {
  let total = 0;
  args.map((e) => (total += e));

  return total;
}

console.log(totalSum(1, 2, 3, 4));

/*The arguments object is not a real array, while rest parameters are Array instances,
 meaning methods like sort(), map(), forEach() or pop() can be applied on it directly. */
