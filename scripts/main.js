import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';
import {cards} from './card.js';

function startGame() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    gameScenes.switchScene('game');

    const gameBoard = new GameBoard(cards);
    gameBoard.shuffleCards();
    document.querySelector('.game-board').innerHTML = gameBoard.render();
}

function flipCard(cardElement) {
    const {id} = cardElement.dataset;
    const selectedCard = cards.find(card => card.id === id);

    if (selectedCard.id === id) {
        selectedCard.flip();
        console.log(selectedCard);
    }
}

async function main() {
    window.startGame = startGame;
    window.flipCard = flipCard;
}

main();
