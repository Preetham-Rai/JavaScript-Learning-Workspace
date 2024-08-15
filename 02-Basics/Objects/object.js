//Object is a data structure in javascript, it is a key value pairs type

const user1 = {
  name: "Preetham",
  number: 12345678909,
  email: "preetham@rai.com",
};

// we can nest and add a function as well

console.log(user1["name"]); //square bracket should always contain double qoute to access value
//There are two ways to access key-values from the object using dot(.) and using [] square bracket.

// console.log(Object.keys(user1)); ["name", "number", "email"]; // In array form
//Using array form we can access it like an array we can loop using map, forEach etc
//console.log(Object.values(user1)); [ 'Preetham', 12345678909, 'preetham@rai.com' ]
//console.log(Object.entries(user1));[ ["name", "Preetham"], ["number", 12345678909],["email", "preetham@rai.com"],];

//Object mutation can be dangerous because an instance of object which can change the property value is directly connected to its original object
//Original objects are mutated when its copy is changed
