const randomNumber = document.querySelector(".generateNum");
const showResults = document.querySelector(".numResults");

randomNumber.addEventListener("click", function (e) {
  let RanNum = Math.round(Math.random() * 1000 + 1);
  // console.log(RanNum);
  showResults.innerHTML = newLine(RanNum);
  console.log(showResults);
});

function newLine(number) {
  let newPara = document.createElement("p");
  document.querySelector(".container").appendChild(newPara);
  newPara.innerText = number;
}
