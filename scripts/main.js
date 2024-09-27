import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';
import {Card} from './card.js';
import {cardImages} from '../data/cards.js';
import {Modal} from './modalManager.js';
import {Audio} from './audio.js';

async function main() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    const endGameModal = new Modal(['end-game']);
    const cards = cardImages.flatMap((card) => [card, card]).map((card) => new Card(card));
    const backgroundMusic = new Audio('background-music');
    const gameBoard = new GameBoard(gameScenes, endGameModal, cards, backgroundMusic);

    window.gameScenes = gameScenes;
    window.endGameModal = endGameModal;
    window.gameBoard = gameBoard;
}

main();
