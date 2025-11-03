export default function WinnerBanner({ winner, handleClick }) {
  if (winner === "") {
    return null;
  }
  return (
    <>
      <h1>{winner}</h1>
      <button onClick={handleClick} style={baseStyle}>
        Play Again
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
