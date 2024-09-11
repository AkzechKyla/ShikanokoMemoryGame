function startGame() {
    const homeScreen = document.querySelector('.home');
    homeScreen.style.display = 'none';
}

async function main() {
    window.startGame = startGame;
}

main();
