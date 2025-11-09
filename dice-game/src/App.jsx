import { useState } from "react";
import Dice from "./Dice.jsx";
import WinnerBanner from "./WinnerBanner.jsx";
function App() {
  const [round, setRound] = useState(1);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

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
    }
  };

  const playAgain = () => {
    setPlayer1(null);
    setPlayer2(null);
    setRound(round + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: 0,
      }}
    >
      <h1>2-Player Dice Game</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dice
          title={"Player 1"}
          index={player1}
          handleClick={rollDice}
          isDisabled={current() === 2}
        />

        <div>VS</div>

        <Dice
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={current() === 1 || player2 !== null}
        />
      </div>

      {winner() && (
        <WinnerBanner winner={winner()} handleClick={playAgain} round={round} />
      )}
    </div>
  );
}

export default App;
