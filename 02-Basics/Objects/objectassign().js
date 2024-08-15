// Object.assign() property is used to concat objects
const target = {};
const obj = {
  1: "a",
  2: "b",
};
const obj1 = {
  3: "a",
  4: "b",
};
const obj2 = {
  5: "a",
  6: "b",
};
//before concating check whether the property of all the objects are different from each other
// or else obj can overwrite each other

// let object = Object.assign(target, obj, obj1, obj2); // all the source object is merged to target empty object

// console.log(object);
// console.log(object === target);
// In current scenario assign object methods are not used
// We use spread operator (...spread)

let combineObj = { ...target, ...obj, ...obj1, ...obj2 };

console.log(combineObj);
