const History = (props) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {props.history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${
                props.currentMove === index ? "active" : ""
              }`}
              onClick={() => props.moveTo(index)}
            >
              {index === 0 ? "Go to game start" : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
