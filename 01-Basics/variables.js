//Variables are like bucket used to store data such as numbers, strings etc.
//let, const are the main variables used currently
//Temporial Dead zone
let userName = "Preetham";
//Non Temporial Dead Zone
// Let variables can be re-assigned
userName = "Sandeep";
console.log(userName); //Output : Sandeep

//In simple terms let and const cannot be Hoisted to the top because of TDZ

const users = {
  name: "preetham",
  age: 23,
};

//const can be used where the actual value not to be changed
