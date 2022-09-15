import { useState } from "react";
import { RenderSquare } from "./RenderSquare";

function Game() {
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

export { Game };
