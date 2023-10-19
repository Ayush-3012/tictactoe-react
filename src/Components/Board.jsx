import Square from "./Square";

const Board = (props) => {
  const renderSquare = (pos) => {
    const isWinningSquare = props.winningSquares.includes(pos);
    return (
      <Square
        value={props.squares[pos]}
        onClick={() => props.handleSquareClick(pos)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
