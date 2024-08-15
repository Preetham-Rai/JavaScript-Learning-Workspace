// Immedietly Invoked function expression
//As soon as the function is made it is called upon
//this fuction is made because to reduce the global pollution

(function myFunction() {
  console.log(`Hello JavaScript`);
})();

(() => {
  console.log(`DB Two`);
})();
