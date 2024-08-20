//creating elements from the javascript
// const div = document.createElement("div");
// div.className = "main-div";
// div.id = "main-id";
// div.setAttribute("title", "Hello"); //We can add class or ID in setAttribute() aswell
// div.innerText = "This is written with JavaScript";
// const textNode = document.createTextNode("This is Written using Text Node"); //created node of the text

// div.appendChild(textNode);
// console.log(div);

// document.body.appendChild(div);

function addLanguage(lang) {
  const list = document.createElement("li");
  list.appendChild(document.createTextNode(lang));
  document.querySelector(".parent").appendChild(list);
}

addLanguage("Python");
addLanguage("c++");

const firstLang = document.querySelector("li:first-child");
const newLi = document.createElement("li");

newLi.innerText = "Golang";

firstLang.replaceWith(newLi);

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
