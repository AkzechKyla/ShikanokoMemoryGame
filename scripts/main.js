import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';
import {Card} from './card.js';
import {cardImages} from '../data/cards.js';

function startGame() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    gameScenes.switchScene('game');

    const cards = cardImages.flatMap((card) => [card, card]).map((card) => new Card(card));

    const gameBoard = new GameBoard(cards);
    gameBoard.render();
}

async function main() {
    window.startGame = startGame;
}

main();
