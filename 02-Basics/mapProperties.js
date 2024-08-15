//create a map instance

const map = new Map();

//set values for the map object
map.set("user1", "Preetham");
map.set("user2", "Sandeep");
map.set("user3", "vilas");

// console.log(map);

// console.log(map.has("user1")); Output : true;

// console.log(map.get("user1")); Output : Preetham;

let mapIterator = map.values();

// console.log(mapIterator.next().value);
// console.log(mapIterator.next().value);

for (const element of map.values()) {
  console.log(element);
}

// Preetham
// Sandeep
// vilas

for (const element of map.keys()) {
  console.log(element);
}
// user1
// user2
// user3

//forEach syntax

map.forEach((key, values) => {
  console.log(`${key} - ${values}`);
});
