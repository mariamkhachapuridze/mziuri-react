import { useState } from "react";
import Dice from "./Dice.jsx";
import WinnerBanner from "./WinnerBanner.jsx";
import GameOverScreen from "./GameOverScreen.jsx";
import Game from "./Game.jsx";

function App() {
  const [round, setRound] = useState(1);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  const gameOverCount = 3;

  const isGameOver = round > gameOverCount;

  const winner = () => {
    if (player2 === null) {
      return null;
    }

    if (player1 > player2) {
      return "Player 1";
    } else if (player2 > player1) {
      return "Player 2";
    } else {
      return "It's a tie!";
    }
  };

  const current = () => {
    if (player1 !== null) {
      return 2;
    } else {
      return 1;
    }
  };

  const rollDice = () => {
    const playerRandomNumber = Math.floor(Math.random() * 6 + 1);

    if (current() === 1) {
      setPlayer1(playerRandomNumber);
    } else {
      setPlayer2(playerRandomNumber);
      if (player1 > playerRandomNumber) {
        setPlayer1Wins(player1Wins + 1);
      } else if (playerRandomNumber > player1) {
        setPlayer2Wins(player2Wins + 1);
      }
    }
  };

  const playNextRound = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(round + 1);
  };

  const finalWinner = () => {
    if (player1Wins > player2Wins) {
      return "Player 1 Wins!";
    } else if (player2Wins > player1Wins) {
      return "Player 2 Wins!";
    }
    return "It's a tie!";
  };

  const playAgain = () => {
    setRound(1);
    setPlayer1(null);
    setPlayer2(null);
    setPlayer1Wins(0);
    setPlayer2Wins(0);
  };

  if (isGameOver) {
    return <GameOverScreen finalWinner={finalWinner()} playAgain={playAgain} />;
  }

  return (
    <Game
      current={current()}
      playNextRound={playNextRound}
      player1={player1}
      player2={player2}
      rollDice={rollDice}
      round={round}
      winner={winner()}
    />
  );
}

export default App;
