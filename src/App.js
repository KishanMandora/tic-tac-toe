import { useState } from "react";
import "./App.css";

function RenderSquare({ i }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const selectSquare = (i) => {
    if (squares[i]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[i] = "X";
    setSquares(squaresCopy);
  };

  return (
    <button
      className={`btn w-12 btn-violet-500 ${squares[i] ? "btn-warning" : ""}`}
      onClick={() => selectSquare(i)}
    >
      <span className="font-black text-lg"> {squares[i]} </span>
    </button>
  );
}

function App() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-4"> Tic Tak Toe </h2>
      <div className="p-4 flex flex-col gap-4 border-4 border-solid rounded-lg">
        <div className="flex gap-4">
          <RenderSquare i={0} />
          <RenderSquare i={1} />
          <RenderSquare i={2} />
        </div>
        <div className="flex gap-4">
          <RenderSquare i={3} />
          <RenderSquare i={4} />
          <RenderSquare i={5} />
        </div>
        <div className="flex gap-4">
          <RenderSquare i={6} />
          <RenderSquare i={7} />
          <RenderSquare i={8} />
        </div>
      </div>
    </section>
  );
}

export default App;
