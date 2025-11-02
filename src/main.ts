// CMPM 121 Smelly Code Activity

// VARIABLES

let counter = 0;
const buttonIncrement = "increment",
  buttonCounter = "counter",
  headingText = "CMPM 121 Project";

// HTML SETUP

document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${buttonCounter}">0</span></p>
    <button id="${buttonIncrement}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

function setup() {
  const allButtons = document.querySelectorAll("button");
  const ctr = document.getElementById(buttonCounter);

  // Check if any element is missing, then exit the function
  if (!allButtons || !ctr) return;

  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonID = this.id;
      if (buttonID == buttonIncrement) {
        counter++;
      } else if (buttonID == "dec") {
        counter--;
      } else {
        counter = 0;
      }
      ctr.innerHTML = `${counter}`;
      document.title = "Clicked " + counter;
      document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
    });
  });
}

function start() {
  setup();
}

start();
