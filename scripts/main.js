import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';

function startGame() {
    const cards = [{
        id: 1,
        url: 'CARDBACK 1',
    }, {
        id: 2,
        url: 'CARDBACK 2',
    }, {
        id: 3,
        url: 'CARDBACK 3',
    }, {
        id: 4,
        url: 'CARDBACK 4',
    }, {
        id: 5,
        url: 'CARDBACK 5',
    }, {
        id: 6,
        url: 'CARDBACK 6',
    }, {
        id: 7,
        url: 'CARDBACK 1',
    }, {
        id: 8,
        url: 'CARDBACK 2',
    }, {
        id: 9,
        url: 'CARDBACK 3',
    }, {
        id: 10,
        url: 'CARDBACK 4',
    }, {
        id: 11,
        url: 'CARDBACK 5',
    }, {
        id: 12,
        url: 'CARDBACK 6',
    }];
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
    })
}

async function main() {
    window.startGame = startGame;
}

main();
