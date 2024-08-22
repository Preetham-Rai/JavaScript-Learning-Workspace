// Event propogation in JavaScript
//Event bubling and Event Capturing

// document
//   .querySelector(".button")
//   .addEventListener("click", function () {}, false);

// document.querySelector(".parentNode").addEventListener("click", function (e) {
//   //   console.log(e.target);
//   //   console.log(e.target.tagName);

//   if (e.target.tagName === "BUTTON") {
//     let removeIt = e.target.parentNode;
//     removeIt.remove();
//   }
// });

// console.log(parent);

// parent.addEventListener("click", function (e) {
//   let removeParent = e.target.parentNode;
//   let grandParent = removeParent.parentNode;
//   grandParent.remove();
// });

// parent.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log(e.target, "This is child Ele");
//   console.log(e.currentTarget, "This is parent ele");
// });

// child.addEventListener("click", function (e) {
// console.log(e.currentTarget, "This is child ele");
// });

const one = document.getElementById("one");

one.addEventListener("click", function (e) {
  one.classList.toggle("myStyle"); //toggle cannot be function so added to a variable called one
});
