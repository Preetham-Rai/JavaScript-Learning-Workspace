const str = "variable"; //assigning variable property to myObj
const myObj = {};

myObj[str] = "This is a bracket notation for variable";
myObj["hello world"] =
  "This is a object property with space and two different props";

console.log(Object.keys(myObj));
