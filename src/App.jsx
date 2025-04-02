import React, { useState } from 'react';
import './App.css';

const Cell = ({ value, onClick }) => {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
};

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return; // Ignore click if cell is already filled

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderCell = (index) => {
    return <Cell value={board[index]} onClick={() => handleClick(index)} />;
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

export default App;
