const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const calculateWinner = (squares) => {
  for (let i = 0; i < winCombination.length; i++) {
    const [a, b, c] = winCombination[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
};

const calculateStatus = (winner, nextValue, squares) => {
  return winner
    ? `Winner is ${winner}`
    : squares.every(Boolean)
    ? `Match Draw`
    : `Next turn ${nextValue}`;
};

export const calculateNextValue = (squares) =>
  squares.filter(Boolean).length % 2 === 0 ? "X" : "O";

export const gameCalculations = (squares) => {
  return {
    winner: calculateWinner(squares),
    nextValue: calculateNextValue(squares),
    status: calculateStatus(
      calculateWinner(squares),
      calculateNextValue(squares),
      squares
    ),
  };
};
