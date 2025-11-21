export default function WinnerBanner({ winner, handleClick, round }) {
  let buttonText = "Play Next Round";
  if (round === 3) {
    buttonText = "See Final Results";
  }
  return (
    <>
      <h1>
        Round {round} winner: {winner}
      </h1>
      <button onClick={handleClick} style={baseStyle}>
        {buttonText}
      </button>
    </>
  );
}

const baseStyle = {
  margin: "10px",
  padding: "15px 30px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "10px",
  backgroundColor: "#11005aff",
  color: "white",
  border: "none",
};
