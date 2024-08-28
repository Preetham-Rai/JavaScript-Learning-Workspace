// We can use Array.of() and Array.from() methods to create array

//To create a instancs of array
const oldArr = new Array(10); // it provides with 10 empty slots with length 10

const newArray = Array.of(10); //element 10 in the index 0 and length is one

/*Array.from() method converts array like objects to full array
- Array like objects are object which share similar property of array
- like string 
*/

const arrayLike = Array.from("hello");
// console.log(arrayLike); [ 'h', 'e', 'l', 'l', 'o' ]

//we can have call back function as well

const iLoveIcecream = (iceCream) =>
  Array.from(iceCream, (e) => `I love ${e} flavoured ice cream`);

// console.log(iLoveIcecream(["chocolate", "coffee", "vanilla"]));
// [
//     'I love chocolate flavoured ice cream',
//     'I love coffee flavoured ice cream',
//     'I love vanilla flavoured ice cream'
//   ]
