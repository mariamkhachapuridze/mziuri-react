import Dice from "./Dice";
import WinnerBanner from "./WinnerBanner";
export default function Game({
  current,
  player1,
  player2,
  rollDice,
  winner,
  playNextRound,
  round,
}) {
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
          isDisabled={current === 2}
        />

        <div>VS</div>

        <Dice
          title={"Player 2"}
          index={player2}
          handleClick={rollDice}
          isDisabled={current === 1 || player2 !== null}
        />
      </div>

      {winner && (
        <WinnerBanner
          winner={winner}
          handleClick={playNextRound}
          round={round}
        />
      )}
    </div>
  );
}
