// JavaScript code goes here

// Initialize variables to keep track of game state
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Function to handle a player's move
function handleCellClick(cell, cellIndex) {
  if (gameBoard[cellIndex] === '' && gameActive) {
    cell.textContent = currentPlayer;
    gameBoard[cellIndex] = currentPlayer;
    if (checkForWin()) {
      gameActive = false;
      document.getElementById('winner-message').textContent = `Player ${currentPlayer} wins!`;
    } else if (!gameBoard.includes('')) {
      gameActive = false;
      document.getElementById('winner-message').textContent = 'It\'s a draw!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Function to check for a win
function checkForWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

// Add event listeners to each cell
document.querySelectorAll('td').forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(cell, index));
});

// Reset the game
document.getElementById('reset-button').addEventListener('click', () => {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.querySelectorAll('td').forEach((cell) => cell.textContent = '');
  document.getElementById('winner-message').textContent = '';
});
