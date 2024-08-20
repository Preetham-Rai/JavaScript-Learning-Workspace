//Some basic dom slectors
const element = document.getElementById("heading");
// console.log(element);

document.querySelectorAll("input[type='text']");
//this querySelectorAll attribute finds all the elements of input type text.
//and it helps to maniplulte all together at once.
document.querySelector("input[type='text']");
// it selects the first element with input type text

//Pseudo Element selector
//Pseudo-classes allow you to select elements based on their state or position in the DOM.
const firstChild = document.querySelector("ul li:first-child");
//selects the first element

//DOM traversal
