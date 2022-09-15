import { useState } from "react";
import { calculateNextValue } from "../utils/calculateNextValue";
import { calculateWinner } from "../utils/calculateWinner";
import { RenderSquare } from "./RenderSquare";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-4"> Tic Tak Toe </h2>
      {winner && <span> Winner is {winner} </span>}
      {!winner && <span> {nextValue} your turn </span>}
      <div className="p-4 flex flex-col gap-4 border-4 border-solid rounded-lg">
        <div className="grid grid-cols-3 gap-4">
          {squares.map((square, index) => {
            return (
              <RenderSquare
                squares={squares}
                setSquares={setSquares}
                i={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Game };
