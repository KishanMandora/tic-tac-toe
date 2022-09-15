import { useState } from "react";
import "./App.css";

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

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-4"> Tic Tak Toe </h2>
      <div className="p-4 flex flex-col gap-4 border-4 border-solid rounded-lg">
        <div className="flex gap-4">
          <RenderSquare squares={squares} setSquares={setSquares} i={0} />
          <RenderSquare squares={squares} setSquares={setSquares} i={1} />
          <RenderSquare squares={squares} setSquares={setSquares} i={2} />
        </div>
        <div className="flex gap-4">
          <RenderSquare squares={squares} setSquares={setSquares} i={3} />
          <RenderSquare squares={squares} setSquares={setSquares} i={4} />
          <RenderSquare squares={squares} setSquares={setSquares} i={5} />
        </div>
        <div className="flex gap-4">
          <RenderSquare squares={squares} setSquares={setSquares} i={6} />
          <RenderSquare squares={squares} setSquares={setSquares} i={7} />
          <RenderSquare squares={squares} setSquares={setSquares} i={8} />
        </div>
      </div>
    </section>
  );
}

export default App;
