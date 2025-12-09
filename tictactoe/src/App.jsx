import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

function checkWinner(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
      return board[i][0];
    }
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
      return board[0][i];
    }
  }
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
    return board[0][2];
  }
  return null;
}

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length % 2 === 0 ? "X" : "O";
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  console.log(gameBoard);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;
    gameBoard[rowIndex][colIndex] = player;
  }

  const winner = checkWinner(gameBoard);
  const isDraw = gameTurns.length === 9 && winner === null;
  const isGameOver = winner !== null || isDraw;
  function handleSquareSelect(rowIndex, colIndex) {
    setGameTurns((prevValue) => {
      let currentPlayer = prevValue.length % 2 === 0 ? "X" : "O";

      const newTurn = {
        square: { rowIndex, colIndex },
        player: currentPlayer,
      };
      return [newTurn, ...prevValue];
    });
  }

  function rematch() {
    setGameTurns(() => []);
  }

  if (isGameOver) {
    return <GameOver rematch={rematch} winner={winner} />;
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        <GameBoard onSquareSelect={handleSquareSelect} gameBoard={gameBoard} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
