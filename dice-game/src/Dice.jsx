export default function Dice({ title, index, handleClick, isDisabled }) {
  const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div style={{ fontSize: "60px" }}>{diceEmojis[index]}</div>
      <p>{title}</p>
      <button onClick={handleClick} disabled={isDisabled}>
        Roll Dice
      </button>
    </div>
  );
}
