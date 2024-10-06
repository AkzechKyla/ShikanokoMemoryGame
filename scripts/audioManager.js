export class AudioManager {
    constructor(sound, music) {
        this.soundButton = document.querySelector('.sound-switch-btn');
        this.musicButton = document.querySelector('.music-switch-btn');

        this.sound = sound;
        this.music = music;
    }

    toggleSound() {
        this.sound.isAudioOn = !this.sound.isAudioOn;

        if (this.sound.isAudioOn) {
            this.soundButton.innerHTML = 'Sound On';
        } else {
            this.soundButton.innerHTML = 'Sound Off';
        }

        console.log(this.sound.isAudioOn);
    }

    toggleMusic() {
        this.music.isAudioOn = !this.music.isAudioOn;

        if (this.music.isAudioOn) {
            this.musicButton.innerHTML = 'Music On';
        } else {
            this.musicButton.innerHTML = 'Music Off';
        }

        console.log(this.music.isAudioOn);
    }
}
