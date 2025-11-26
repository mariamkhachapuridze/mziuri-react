import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [turn, setTurn] = useState("X");

  function handleSquareSelect(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] != null) {
      return;
    }
    gameBoard[rowIndex][colIndex] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setGameBoard([...gameBoard]);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSquareSelect(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
