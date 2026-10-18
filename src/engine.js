import { startPos } from "./data/pieces.js";

let squares = {};
let squareSelected = false;
let newPosition = null;
let newSquare = null;
const board = document.querySelector(".board");

for (let i = 1; i <= 64; i++) {
  squares[i] = document.getElementById(String(i));
  if (startPos[i]) {
    squares[i].textContent = startPos[i];
  }
}

board.addEventListener("click", (e) => {
  // declare event vars and debug
  let target = e.target;
  let targetContent = target.textContent;
  let targetId = target.id;
  console.log(e);
  console.log("target:", target);
  console.log("targetContent:", targetContent);
  console.log("targetId:", targetId);

  // square outline when clicked
  if (target.textContent === "") {
    deselectSquares();
  } else {
    deselectSquares();
    target.classList.toggle("selected");
    // squareSelected = target.classList.contains("selected");
    console.log("squareSelected:", squareSelected);
    newPosition = checkMove(targetId, targetContent);
    console.log("newPosition:", newPosition);
    newSquare = executeMove(newPosition, targetId);
    console.log("newSquare:", newSquare);
    newSquare.textContent = targetContent;
    target.textContent = "";
    deselectSquares();
  }
});

const checkMove = (targetId, targetContent) => {
  console.log(
    "move exec, targetId: " + targetId + " targetContent:",
    targetContent,
  );

  let newTempPosition = null;

  if (targetContent === "") {
    deselectSquares();
  } else if (targetContent === "♙") {
    newTempPosition = targetId - 8;
    console.log("newTempPosition:", newTempPosition);
    return newTempPosition;
  }
};

const executeMove = (newPosition, targetId, targetContent) => {
  let newTempSquare = squares[newPosition];
  if (newTempSquare === "") {
    newTempSquare = targetContent;
  }

  return newTempSquare;
};

const deselectSquares = () => {
  for (let i = 1; i <= 64; i++) {
    squares[i].classList.remove("selected");
  }
};

// const getLegalMoves = (targetId, targetContent) => {
//   console.log("targetContent:", targetContent);
//   console.log("targetId", targetId);
//   if (targetContent === " ") {
//     console.log("Square is empty");
//   }
//   if (targetContent === "♟") {
//   }
// };
