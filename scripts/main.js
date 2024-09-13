import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';
import {Card, cards} from './card.js';

function startGame() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    gameScenes.switchScene('game');

    const gameBoard = new GameBoard(cards);
    gameBoard.shuffleCards();
    document.querySelector('.game-board').innerHTML = gameBoard.render();

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', () => {
            console.log('clicked');
            const {id} = card.dataset;
            console.log(id);
        });
    });
}

async function main() {
    window.startGame = startGame;
}

main();
