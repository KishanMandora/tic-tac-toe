function RenderSquare({ squares, setSquares, i }) {
  const calculateNextValue = () =>
    squares.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const nextValue = calculateNextValue();

  const selectSquare = (i) => {
    if (squares[i]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[i] = nextValue;
    setSquares(squaresCopy);
  };

  const playerStyle = (value) => {
    if (value === "X") {
      return "btn-primary";
    } else if (value === "O") {
      return "btn-accent";
    }
  };

  return (
    <button
      className={`btn w-12 btn-violet-500 ${playerStyle(squares[i])}`}
      onClick={() => selectSquare(i)}
    >
      <span className="font-black text-lg"> {squares[i]} </span>
    </button>
  );
}

export { RenderSquare };
