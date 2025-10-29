import {useState} from "react";
import Dice from "./Dice.jsx";
function App() {
  const [player1Total,setPlayer1Total] = useState(0);
  const [player2Total,setPlayer2Total] = useState(0);
  const [round,setRound]= useState(0);
  const [winner,setWinner]= useState("");

  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const rollDice = () => {
    const playerRandomNumber = Math.floor(Math.random() * 6);
    setWinner("");

    if(currentPlayer === 1){
      setPlayer1(playerRandomNumber);
      setPlayer1Total(player1Total + playerRandomNumber+1);
      setCurrentPlayer(2);
    } else {
      let newTotal = player2Total + playerRandomNumber+1;

      setPlayer2(playerRandomNumber);
      setPlayer2Total(newTotal);
      setCurrentPlayer(1);
      setRound(round + 1);
      if(round === 1){
        if(player1Total > newTotal){
          setWinner("Player 1 wins!");
        } else if (newTotal > player1Total){
          setWinner("Player 2 wins!");
        } else {
          setWinner("It's a tie!");
        }
        setRound(0);
        setPlayer1Total(0);
        setPlayer2Total(0);
        setPlayer1(0);
        setPlayer2(0);
      }
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
      <p>Player 1 total: {player1Total}</p>
      <p>Player 2 total: {player2Total}</p>
      <p>Round: {round }</p>
      <p>{winner}</p>
  </div>
}

export default App