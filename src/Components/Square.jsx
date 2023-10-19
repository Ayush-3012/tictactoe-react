const Square = (props) => {
  const colorClassName = props.value === "X" ? "text-green" : "text-orange";
  const winningClassName = props.isWinningSquare ? "winning" : "";

  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Square;
