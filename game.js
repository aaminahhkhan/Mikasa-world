function toggleGameWindow() {
    const gameWindow = document.getElementById('game-window');
    gameWindow.classList.toggle('hidden');
}
function toggleGameWindow() {
    const gameWindow = document.getElementById('game-window');
    const iframe = gameWindow.querySelector('iframe');

    if (gameWindow.classList.contains('hidden')) {
        iframe.src = 'tic-tac-toe.html'; 
        gameWindow.classList.remove('hidden');
    } else {
        iframe.src = ''; 
        gameWindow.classList.add('hidden');
    }
}
