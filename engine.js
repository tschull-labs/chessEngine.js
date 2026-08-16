let squares = {};
let activeSquare = null;
let activePiece = null;
let pieceClicked = false;
let legalMove = false;
const blackPieces = ["♟", "♜", "♞", "♝", "♛", "♚"];
const whitePieces = ["♙", "♖", "♘", "♗", "♕", "♔"];
const startPos = {
  1: "♜",
  2: "♞",
  3: "♝",
  4: "♛",
  5: "♚",
  6: "♝",
  7: "♞",
  8: "♜",
  9: "♟",
  10: "♟",
  11: "♟",
  12: "♟",
  13: "♟",
  14: "♟",
  15: "♟",
  16: "♟",
  49: "♙",
  50: "♙",
  51: "♙",
  52: "♙",
  53: "♙",
  54: "♙",
  55: "♙",
  56: "♙",
  57: "♖",
  58: "♘",
  59: "♗",
  60: "♕",
  61: "♔",
  62: "♗",
  63: "♘",
  64: "♖",
};
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
