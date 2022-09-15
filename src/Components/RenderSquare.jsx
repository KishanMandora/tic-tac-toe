import { gameCalculations } from "../utils/gameCalculations";

function RenderSquare({ squares, setSquares, i }) {
  const { winner, nextValue } = gameCalculations(squares);

  const selectSquare = (i) => {
    if (winner || squares[i]) {
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
