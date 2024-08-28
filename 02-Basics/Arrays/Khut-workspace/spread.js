//Spread ise used to add multiple values

//cloning arrays

const items = ["mouse", "cable", "microphone"];
const itemCopy = [...items];
//using spread operator create new array of items
itemCopy.push("USB"); //This ways itemCopy is the reference of items array and will modify the original array as well

// console.log(`ITEM : ${items}`);
// console.log(`ITEM COPY : ${itemCopy}`);

//spread operator is used to concat arrays

const color1 = ["red", "green", "blue"];
const color2 = ["orange", "yellow", "purple"];

const allColors = [...color1, ...color2];
//we can concat many arrays using this method
console.log(allColors);
