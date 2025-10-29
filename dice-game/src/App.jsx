import {useState} from "react";
import Dice from "./Dice.jsx";
function App() {

  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const rollDice = () => {
    const playerRandomNumber = Math.floor(Math.random() * 6) + 1;

    if(currentPlayer === 1){
      setPlayer1(playerRandomNumber);
      setCurrentPlayer(2);
    } else {
      setPlayer2(playerRandomNumber);
      setCurrentPlayer(1);
    }
  }
  
  return <div
  style={{
    textAlign: 'center',
    padding: '20px',
    margin: 0
  }}>
    <h1>2-Player Dice Game</h1>
    <Dice title={"Player 1"} index={player1} handleClick={rollDice} isDisabled={currentPlayer === 2} />

  <div>VS</div>
  
    <Dice title={"Player 2"} index={player2} handleClick={rollDice} isDisabled={currentPlayer === 1}/>
  </div>
}

export default App