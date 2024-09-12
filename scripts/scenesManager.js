export class ScenesManager {
    constructor(scenes) {
        this.scenes = scenes;
    }

    switchScene(sceneName) {
        for (const scene of this.scenes) {
            if (scene === sceneName) {
                document.querySelector(`.${scene}`).style.display = 'block';
                console.log(document.querySelector(`.${scene}`).style.display);
            } else {
                document.querySelector(`.${scene}`).style.display = 'none';
                console.log(document.querySelector(`.${scene}`).style.display);
            }
        }
    }

}
