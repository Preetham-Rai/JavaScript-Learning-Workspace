const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target); //the e refers to button and target is the one which is clicked
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    //Switch Case
    // let value = e.target.id;
    // switch (value) {
    //   case "grey":
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case "yellow":
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case "blue":
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case "green":
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   default:
    //     alert("No colour found");
    //     break;
    // }
  });
});
