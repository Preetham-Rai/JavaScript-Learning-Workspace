const target = {};
const source1 = {
  1: "a",
  2: "b",
};

const source2 = {
  3: "c",
  4: "d",
};
console.log(target);
let combine = Object.assign(target, source1, source2); // source1 and 2 are merged to target object

console.log(combine);

console.log(target);

console.log(combine !== target);
