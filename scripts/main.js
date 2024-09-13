import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';

function startGame() {
    const cards = [{
        url: 'CARDBACK 1',
    }, {
        url: 'CARDBACK 2',
    }, {
        url: 'CARDBACK 3',
    }, {
        url: 'CARDBACK 4',
    }, {
        url: 'CARDBACK 5',
    }, {
        url: 'CARDBACK 6',
    }, {
        url: 'CARDBACK 1',
    }, {
        url: 'CARDBACK 2',
    }, {
        url: 'CARDBACK 3',
    }, {
        url: 'CARDBACK 4',
    }, {
        url: 'CARDBACK 5',
    }, {
        url: 'CARDBACK 6',
    }
    ];
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    gameScenes.switchScene('game');

    const gameBoard = new GameBoard(cards);
    document.querySelector('.game-board').innerHTML = gameBoard.render();
}

async function main() {
    window.startGame = startGame;
}

main();
