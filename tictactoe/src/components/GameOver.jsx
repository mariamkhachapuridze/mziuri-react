export default function GameOver({ rematch, winner }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner ? winner + " won!" : "it's a draw"}</p>
      <p>
        <button onClick={rematch}>Rematch!</button>
      </p>
    </div>
  );
}
