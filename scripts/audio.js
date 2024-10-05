export class Audio {
    constructor(player) {
        this.audio = document.querySelector(`.${player}`);
        this.isAudioOn = true;
    }

    play(song) {
        let src;

        this.audio.volume = 0.5;

        switch(song) {
            case 'Start':
                src = 'assets/audio/ShikairoDays.mp3';
                break;
            case 'End':
                src = 'assets/audio/Shika-senbei-no-Uta.mp3';
                break;
            case 'Match':
                src = 'assets/audio/SHIKABUKISTE-YATTA.mp3';
                this.audio.volume = 1;
                break;
        }

        this.audio.src = src;

        if (this.isAudioOn) {
            this.audio.play();
        }
    }

    stop() {
        this.audio.pause();
    }
}
