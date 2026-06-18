let squares = {};
let activeSquare = null;
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

for (let i = 1; i <= 64; i++) {
  squares[i] = document.getElementById(String(i));
  if (startPos[i]) {
    squares[i].textContent = startPos[i];
  }

  squares[i].addEventListener("click", () => {
    if (squares[i].textContent) {
      activeSquare = squares[i];
      console.log(`square ${i} clicked`);
      console.log(activeSquare);
      if (activeSquare !== null) {
        activeSquare = null;
      }
    }
  });
}

console.log(squares);
