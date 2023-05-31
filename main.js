let allBtns = document.querySelectorAll(".btn");

let screen = document.querySelector(".inputer");

let operation = "none";

let currentValue = 0;

let screenValue = screen.innerHTML;
for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener("click", function () {
    let value = this.innerHTML;
    click();
    switch (value) {
      case "1":
        screen.value += value;
        break;
      case "2":
        screen.value += value;
        break;
      case "3":
        screen.value += value;
        break;
      case "4":
        screen.value += value;
        break;
      case "5":
        screen.value += value;
        break;
      case "6":
        screen.value += value;
        break;
      case "7":
        screen.value += value;
        break;
      case "8":
        screen.value += value;
        break;
      case "9":
        screen.value += value;
        break;
      case "0":
        screen.value += value;
        break;
      case "+":
        currentValue = Number(screen.value);
        screen.value = null;
        operation = "plus";
        break;
      case "-":
        currentValue = Number(screen.value);
        screen.value = null;
        operation = "minus";
        break;
      case "/":
        currentValue = Number(screen.value);
        screen.value = null;
        operation = "div";
        break;
      case "*":
        currentValue = Number(screen.value);
        screen.value = null;
        operation = "mult";
        break;
      case "%":
        currentValue = Number(screen.value);
        screen.value = null;
        operation = "perc";
        break;
      case "C":
        reset();
        break;
      case "=":
        if (operation === "plus") {
          currentValue += Number(screen.value);
          screen.value = currentValue;
        } else if (operation === "minus") {
          currentValue -= Number(screen.value);
          screen.value = currentValue;
        } else if (operation === "mult") {
          currentValue *= Number(screen.value);
          screen.value = currentValue;
        } else if (operation === "div") {
          currentValue /= Number(screen.value);
          screen.value = currentValue;
        } else if (operation === "perc") {
          currentValue *= 1 / 100;
          screen.value = currentValue;
        }
        break;
    }
  });
}

function save() {
  currentValue += Number(screen.value);
  screen.value = null;
}

function reset() {
  screen.value = null;
  operation = "none";
  currentValue = null;
}

function click() {
  let play = new Audio("MouseClick1.WAV");
  play.play();
}

function darkMode() {
  document.querySelector("body").classList.add("darkMode");
  document.querySelector(".moon").classList.add("invisible");
  document.querySelector(".sun").classList.remove("invisible");
  click();
}
function lightMode() {
  document.querySelector("body").classList.remove("darkMode");
  document.querySelector(".moon").classList.remove("invisible");
  document.querySelector(".sun").classList.add("invisible");
  click();
}

document.querySelector(".moon").addEventListener("click", darkMode);
document.querySelector(".sun").addEventListener("click", lightMode);
