export class AudioManager {
    constructor(sound, music) {
        this.soundButton = document.querySelector('.sound-switch-btn');
        this.musicButton = document.querySelector('.music-switch-btn');

        this.sound = sound;
        this.music = music;
    }
}
