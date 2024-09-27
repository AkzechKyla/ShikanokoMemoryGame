export class AudioPlayer {
    constructor() {
        this.audio = document.querySelector('.music-player');
    }

    play() {
        this.audio.src = 'assets/audio/ShikairoDays.mp3';
        this.audio.play();
    }
}
