import express from 'express';

const app = express();
const PORT = 5000;

// Mock game board state
const gameBoard = {
  board: [
    ['X', 'O', 'X'],
    ['O', 'X', ''],
    ['', 'O', 'X']
  ],
  status: 'X wins'
};

// Define the endpoint
app.get('/api/mock/gameboard', (req, res) => {
  console.log('Endpoint hit: /api/mock/gameboard'); // Log when the endpoint is hit
  res.setHeader('Content-Type', 'application/json');
  res.json(gameBoard); // Send the game board state
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
