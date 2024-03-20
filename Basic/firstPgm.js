let Mode = document.querySelector("body");
let H1 = document.querySelector("h1");

let currentMode = "Light";

Mode.addEventListener("click", () => {
  if (currentMode === "Light") {
    currentMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
    H1.innerText = "Dark Mode";
    document.querySelector("h1").style.color = "white";
  } else {
    currentMode = "Light";
    document.querySelector("body").style.backgroundColor = "white";
    H1.innerText = "Light Mode";
    document.querySelector("h1").style.color = "black";
  }
  console.log(currentMode);
});
