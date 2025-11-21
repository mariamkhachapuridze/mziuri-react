export default function GameOverScreen({
  playAgain,
  player1Wins,
  player2Wins,
}) {
  const finalWinner = () => {
    if (player1Wins > player2Wins) {
      return "Player 1 Wins!";
    } else if (player2Wins > player1Wins) {
      return "Player 2 Wins!";
    }
    return "It's a tie!";
  };

  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #c8e6c9 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "24px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
          padding: "48px 60px",
          maxWidth: "460px",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            margin: "0 0 20px 0",
            fontWeight: "bold",
            color: "#333",
            letterSpacing: "1px",
            textShadow: "0 2px 10px rgba(76,175,80,0.08)",
          }}
        >
          {finalWinner()}
        </h1>
        <button
          onClick={playAgain}
          style={{
            marginTop: "18px",
            padding: "16px 40px",
            fontSize: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 18px rgba(33, 150, 243, 0.13)",
            letterSpacing: "2px",
          }}
        >
          🎲 Play Again
        </button>
      </div>
    </div>
  );
}
