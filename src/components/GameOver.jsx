export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>{winner ? `Player ${winner} wins!` : "It's a draw!"}</h2>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
