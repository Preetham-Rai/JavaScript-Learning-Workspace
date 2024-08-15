// Map object holds key-value pair

let map = new Map(); // created a new intamces of map

map.set("name", "Preetham"); //set key and value
map.set("age", 23);
map.set("email", "preetham@gmail.com");
// console.log(map.get()); //get the values from the specified key

// for (const [key, value] of map) {
//   console.log(key, "-", value);
// }

// console.log(map.size);

// The correct usage for storing data in the Map is through the set(key, value) method.
// console.log(map.clear()); clear all the properties of the map
// console.log(map);

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

//mapping the array using map() method,
//map() iterates through source array and create a new array without mutating the actual array

let color = ["Red", "Orange", "Gray"];
let crayon = color.map((ele) => `${ele} crayon`);
console.log(crayon);
