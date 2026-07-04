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

for (let i = 1; i <= 64; i++) {
  squares[i] = document.getElementById(String(i));
  if (startPos[i]) {
    squares[i].textContent = startPos[i];
  }

  squares[i].addEventListener("click", () => {
    if (!pieceClicked) {
      if (squares[i].textContent) {
        activeSquare = i;
        activePiece = squares[i].textContent;
        pieceClicked = true;
      }
    } else {
      const getLegalMoves = () => {
        const col = (activeSquare - 1) % 8;
        const row = Math.floor((activeSquare - 1) / 8);
        if (activePiece === "♙") {
          if (!squares[activeSquare - 8]?.textContent) {
            moves.push(activeSquare - 8);
            if (row === 6 && !squares[activeSquare - 16]?.textContent) {
              moves.push(activeSquare - 16);
            }
          }
          if (
            col > 0 &&
            blackPieces.includes(squares[activeSquare - 9]?.textContent)
          ) {
            moves.push(activeSquare - 9);
          }
          if (
            col < 7 &&
            blackPieces.includes(squares[activeSquare - 7]?.textContent)
          ) {
            moves.push(activeSquare - 7);
          }
          return moves;
        }
        if (activePiece === "♖") {
          if (
            col === 0 &&
            row === 7 &&
            !squares[activeSquare - 9]?.textContent
          ) {
            moves.push(activeSquare - 9);
          }
        }
      };
      const moves = getLegalMoves();
      legalMove = moves.includes(i);
      if (legalMove) {
        squares[i].textContent = activePiece;
        squares[activeSquare].textContent = "";
        pieceClicked = false;
      } else {
      }
    }
  });
}
