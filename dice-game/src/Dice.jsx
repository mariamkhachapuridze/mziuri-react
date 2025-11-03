const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export default function Dice({ title, index, handleClick, isDisabled }) {
  const buttonStyle = isDisabled
    ? { ...baseStyle, ...disabledStyle }
    : { ...baseStyle };

  const diceEmoji = index === null ? diceEmojis[0] : diceEmojis[index];

  return (
    <>
      <div>
        <h3>{title}</h3>
        <div style={{ fontSize: "60px" }}>{diceEmojis[index]}</div>
        <button onClick={handleClick} style={buttonStyle} disabled={isDisabled}>
          Roll Dice
        </button>
      </div>
    </>
  );
}

const disabledStyle = {
  backgroundColor: "#800101a2",
  cursor: "not-allowed",
  opacity: 0.6,
};

const baseStyle = {
  margin: "10px",
  padding: "15px 30px",
  fontSize: "20px",
  cursor: "pointer",
  borderRadius: "10px",
  backgroundColor: "#800101ff",
  color: "white",
  border: "none",
};
