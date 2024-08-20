// const grandparent = document.getElementById("grandparent-id");
// const childOne = document.querySelector(".child");
// const parent = document.getElementsByClassName("parent");
// const parent = Array.from(document.querySelectorAll(".parent"));
//we need to use forEach()/map() to perform some action at one
//to use array functions..the element should be array or should be converted to array
// parent.map((element) => {
//   element.style.backgroundColor = "#333";
// });

//To Access Childer from the parent we use .children method to the parent ele
// const grandparent = document.querySelector(".grandparent");
//const parent = grandparent.children; // this create an access to children to use it we have to loop
// const parent = Array.from(grandparent.children);

//We can access element from grandparent aswell

// const firstChild = grandparent.querySelectorAll(".child");
//this will access all the child inside the grandparent

// const parent = Array.from(grandparent.children);
// const firstParent = parent[0];
// const child = Array.from(firstParent.children);
// parent.forEach(changeColor);
// child.forEach();

//moving node to upwards
const firstChildren = document.querySelector("#child-one");
const parent = firstChildren.parentElement;
const grandparent = parent.parentElement;

changeColor(grandparent);

function changeColor(element) {
  element.style.backgroundColor = "#333";
}
