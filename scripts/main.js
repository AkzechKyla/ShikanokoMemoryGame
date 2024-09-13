import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';

function startGame() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    const gameBoard = new GameBoard();

    const cards = [
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
        '<div class="card">CARDBACK</div>',
    ];

    gameScenes.switchScene('game');
    document.querySelector('.game-board').innerHTML = gameBoard.render(cards);

}

async function main() {
    window.startGame = startGame;
}

main();
