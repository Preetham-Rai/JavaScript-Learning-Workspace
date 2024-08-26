//Generate Random color

const randomColor = function () {
  const hex = "0123456789ABCDEF"; //range of hex colors
  let color = "#"; // we will append the code to #
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};
let intervalId;

const startBg = document.querySelector("#start");
const stopBg = document.querySelector("#stop");

const startBgColor = function () {
  intervalId = setInterval(changeColor, 1000);
  console.log("STARTED");

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopBgColor = function () {
  clearInterval(intervalId);
  console.log("STOPPED");
};

startBg.addEventListener("click", startBgColor);
stopBg.addEventListener("click", stopBgColor);
