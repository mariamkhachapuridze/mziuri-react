import { useState } from "react";
import Dice from "./Dice.jsx";
import WinnerBanner from "./WinnerBanner.jsx";
function App() {
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState("");

  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const determineWinner = (roll1, roll2) => {
    if (roll1 > roll2) {
      setWinner("Player 1 wins!");
    } else if (roll2 > roll1) {
      setWinner("Player 2 wins!");
    } else {
      setWinner("It's a tie!");
    }
    setRound(0);
  };

  const rollDice = () => {
    const playerRandomNumber = Math.floor(Math.random() * 6);

    if (currentPlayer === 1) {
      setPlayer1(playerRandomNumber);
      setCurrentPlayer(2);
    } else {
      setPlayer2(playerRandomNumber);
      setCurrentPlayer(1);
      setRound(round + 1);
      determineWinner(player1, playerRandomNumber);
    }
  };

  const playAgain = () => {
    setPlayer1(0);
    setPlayer2(0);
    setWinner("");
    setRound(0);
    setCurrentPlayer(1);
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
          isDisabled={currentPlayer === 2 || winner !== ""}
        />

        <div>VS</div>

        <Dice
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={currentPlayer === 1 || winner !== ""}
        />
      </div>

      <WinnerBanner winner={winner} handleClick={playAgain} />
    </div>
  );
}

export default App;
