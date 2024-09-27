export class AudioPlayer {
    constructor() {
        this.audio = document.querySelector('.music-player');
    }

    play(song) {
        let src;

        switch(song) {
            case 'Start':
                src = 'assets/audio/ShikairoDays.mp3';
                break;
            case 'End':
                src = 'assets/audio/Shika-senbei-no-Uta.mp3';
                break;
        }

        this.audio.src = src;
        this.audio.play();
    }

    stop() {
        this.audio.pause();
    }
}
