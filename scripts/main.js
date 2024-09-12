import {ScenesManager} from './scenesManager.js';

function startGame() {
    const gameScenes = new ScenesManager(['main-menu', 'game']);
    gameScenes.switchScene('game');
}

async function main() {
    window.startGame = startGame;
}

main();
