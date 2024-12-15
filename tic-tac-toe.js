const board = Array(9).fill(null); // Initialize board
const playerSymbol = '<img src="m.gif" alt="Player">';
const computerSymbol = '<img src="titan.gif" alt="Computer">';
let isPlayerTurn = true;

// DOM Elements
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('game-status');
const restartButton = document.getElementById('restart-btn');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const popupCloseButton = document.getElementById('popup-close-btn');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

restartButton.addEventListener('click', restartGame);
popupCloseButton.addEventListener('click', () => {
    popup.classList.add('hidden');
    restartGame(); // Automatically restart the game after closing
});

function handleCellClick(cell, index) {
    if (board[index] || !isPlayerTurn) return;

    // Player's move
    board[index] = 'Player';
    cell.innerHTML = playerSymbol;

    if (checkWin('Player')) {
        statusText.textContent = "Player Wins!";
        endGame();
        return;
    } else if (board.every(cell => cell)) {
        statusText.textContent = "It's a Draw!";
        endGame();
        return;
    }

    // Switch turn to computer
    isPlayerTurn = false;
    statusText.textContent = "Computer's Turn";

    setTimeout(computerMove, 1000); // Simulate thinking delay
}

function computerMove() {
    const emptyCells = board.map((cell, i) => (cell ? null : i)).filter(i => i !== null);
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    // Computer's move
    board[randomIndex] = 'Computer';
    cells[randomIndex].innerHTML = computerSymbol;

    if (checkWin('Computer')) {
        statusText.textContent = "Computer Wins!";
        endGame();
        return;
    } else if (board.every(cell => cell)) {
        statusText.textContent = "It's a Draw!";
        endGame();
        return;
    }

    // Switch turn to player
    isPlayerTurn = true;
    statusText.textContent = "Your Turn";
}

function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winningCombinations.some(combination =>
        combination.every(index => board[index] === player)
    );
}

function endGame() {
    isPlayerTurn = false;

    // Update scores
    if (statusText.textContent.includes("Player Wins")) {
        playerScore++;
        playerScoreText.textContent = playerScore;
    } else if (statusText.textContent.includes("Computer Wins")) {
        computerScore++;
        computerScoreText.textContent = computerScore;
    }

    // Show a pop-up with the winner
    if (statusText.textContent.includes("Wins")) {
        popupMessage.textContent = statusText.textContent;
    } else {
        popupMessage.textContent = "It's a Draw!";
    }
    popup.classList.remove('hidden');
}

function restartGame() {
    board.fill(null);
    cells.forEach(cell => (cell.innerHTML = ''));
    isPlayerTurn = true;
    statusText.textContent = "Your Turn";
}