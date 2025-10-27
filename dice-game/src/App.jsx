import Dice from "./Dice.jsx";
function App() {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];


  return <div
  style={{
    textAlign: 'center',
    padding: '20px',
    margin: 0
  }}>
    <h1>2-Player Dice Game</h1>
    <Dice dice={diceEmojis[0]} title={"Player 1"} />

  <div>VS</div>
  
    <Dice dice={diceEmojis[0]} title={"Player 2"} />
  </div>
}

export default App