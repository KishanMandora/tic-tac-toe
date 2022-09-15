import { useState } from "react";
import { RenderSquare } from "./RenderSquare";
import { gameCalculations } from "../utils/gameCalculations";
import { useEffect } from "react";

function Game() {
  const [squares, setSquares] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("squares")) || Array(9).fill(null)
  );

  useEffect(() => {
    window.localStorage.setItem("squares", JSON.stringify(squares));
  });

  const { status } = gameCalculations(squares);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl"> Tic Tak Toe </h2>
      <div className="text-lg mt-3"> {status} </div>
      <div className="p-4 my-4 flex flex-col gap-4 border-4 border-solid rounded-lg">
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

      <button
        className="btn btn-outline btn-error"
        onClick={() => setSquares(Array(9).fill(null))}
      >
        Restart
      </button>
    </section>
  );
}

export { Game };
