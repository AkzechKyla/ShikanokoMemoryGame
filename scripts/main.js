import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';
import {Card, cards} from './card.js';

function startGame() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    gameScenes.switchScene('game');

    const gameBoard = new GameBoard(cards);
    gameBoard.render();
}

async function main() {
    window.startGame = startGame;
}

main();
