const StatusMessage = (props) => {
  const noMovesLeft = props.squares.every(
    (squareValue) => squareValue !== null
  );
  const nextPlayer = props.isXNext ? "X" : "0";

  const renderStatusMessage = () => {
    if (props.winner)
      return (
        <>
          Winner is{" "}
          <span className={props.winner === "X" ? "text-green" : "text-orange"}>
            {props.winner}
          </span>
        </>
      );
    else if (!props.winner && noMovesLeft)
      return (
        <>
          <span className="text-orange">0</span> and{" "}
          <span className="text-green">X</span> tied
        </>
      );
    else if (!props.winner && !noMovesLeft)
      return (
        <>
          Next Player is{" "}
          <span className={props.isXNext ? "text-green" : "text-orange"}>
            {nextPlayer}
          </span>
        </>
      );

    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
