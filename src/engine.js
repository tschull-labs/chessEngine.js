import { startPos } from "./data/pieces.js";

let squares = {};
const board = document.querySelector(".board");

for (let i = 1; i <= 64; i++) {
  squares[i] = document.getElementById(String(i));
  if (startPos[i]) {
    squares[i].textContent = startPos[i];
  }
}

board.addEventListener("click", (event) => {
  let target = event.target;
  console.log("event:", target.textContent);
  console.log("target:", target);
  if (target.textContent === "") {
    deselectSquares();
  } else {
    deselectSquares();
    target.classList.toggle("selected");
  }
});

const deselectSquares = () => {
  for (let i = 1; i <= 64; i++) {
    squares[i].classList.remove("selected");
  }
};
