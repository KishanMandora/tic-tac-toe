export const calculateNextValue = (squares) =>
  squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
