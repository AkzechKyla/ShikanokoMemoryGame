export class ScenesManager {
    constructor(scenes) {
        this.scenes = scenes;
    }

    switchScene(sceneName) {
        for (const scene of this.scenes) {
            if (scene === sceneName) {
                document.querySelector(`.${scene}`).classList.remove('opacity-0', 'pointer-events-none');
                document.querySelector(`.${scene}`).classList.add('opacity-100');
            } else {
                document.querySelector(`.${scene}`).classList.add('opacity-0', 'pointer-events-none');
                document.querySelector(`.${scene}`).classList.remove('opacity-100');
            }
        }
    }

}
