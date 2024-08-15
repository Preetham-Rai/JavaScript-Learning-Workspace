const map = new Map();

map.set("onePiece", "Luffy");
map.set("naruto", "Naruto Uzumaki");
map.set("bleach", "Ichigo Kurosaki");

console.log(map);

for (const [key, value] of map) {
  console.log(key, value);
}
