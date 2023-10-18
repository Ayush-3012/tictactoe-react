import Board from "./Board";
import { useState } from "react";
import { calculateWinner } from "./winner";
import StatusMessage from "./StatusMessage";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = (clickedPos) => {
    if (squares[clickedPos] || winner) return;

    setSquares((currentSquare) => {
      return currentSquare.map((squareValue, pos) => {
        if (clickedPos === pos) {
          return isXNext ? "X" : "0";
        }

        return squareValue;
      });
    });

    setIsXNext((currentIsXNext) => !currentIsXNext);
  };

  const onNewGameStart = () => {};

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />

      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? "active" : ""}`}
      >
        Start new game
      </button>
    </div>
  );
};

export default App;
