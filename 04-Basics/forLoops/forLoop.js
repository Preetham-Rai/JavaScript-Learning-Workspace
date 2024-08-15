//The for loop is meant to repeatedly execute a piece of code a known number of times.
//Syntax
//for(initialization; condition; execution){}
for (let i = 1; i <= 10; i++) {
  // console.log(i);
  if (i === 9) {
    // console.log(i);
    break;
  }
  // console.log(i);
}

let array = [1, 2, 3, 45, 6, 7];

for (let i = 1; i < array.length; i++) {
  // console.log(array[i]);
}

let odd = "";

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
