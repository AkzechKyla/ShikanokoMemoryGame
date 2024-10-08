import {ScenesManager} from './scenesManager.js';
import {GameBoard} from './gameBoard.js';
import {Card} from './card.js';
import {cardImages} from '../data/cards.js';
import {Modal} from './modalManager.js';
import {Audio} from './audio.js';
import {AudioManager} from './audioManager.js';

async function main() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    const endGameModal = new Modal(['end-game']);
    const cards = cardImages.flatMap((card) => [card, card]).map((card) => new Card(card));
    const backgroundMusic = new Audio('background-music');
    const soundEffect = new Audio('sound-effect');
    const audioManager = new AudioManager(soundEffect, backgroundMusic);
    const gameBoard = new GameBoard(gameScenes, endGameModal, cards, backgroundMusic, soundEffect);

    window.gameScenes = gameScenes;
    window.endGameModal = endGameModal;
    window.gameBoard = gameBoard;
    window.audioManager = audioManager;
}

main();
