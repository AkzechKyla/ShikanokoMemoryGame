export class GameBoard {
    constructor(gameScenes, modals, cards, backgroundMusic, soundEffect) {
        this.gameScenes = gameScenes;
        this.modals = modals;

        this.cards = cards;
        this.shuffleCards();
        this.selectedCards = [];

        for (const card of this.cards) {
            const cardElement = card.render();
            cardElement.addEventListener('click', () => this.selectCard(card));
        }

        this.backgroundMusic = backgroundMusic;
        this.soundEffect = soundEffect;
    }

    startGame() {
        // switch to Game Scene
        this.gameScenes.switchScene('game');
        this.render();

        // play background music for Start
        this.backgroundMusic.play('Start');

        // start timer
        this.timer = new Timer();
        this.timer.start();
        this.renderTimer();

        // hide End Game modal if there is one
        this.modals.hideModal('end-game');

        // set moves to 0
        this.moves = 0;
        this.renderNumberOfMoves();

        // set matched cards to 0
        this.matchedCards = 0;
        this.render();
    }

    endGame() {
        this.modals.showModal('end-game');
        this.renderModal();
        this.backgroundMusic.stop();
        this.backgroundMusic.play('End');

        this.flipCards();
    }

    render() {
        const board = document.querySelector('.game-board');

        for (const card of this.cards) {
            const cardElement = card.render();
            board.appendChild(cardElement);
        }
    }

    flipCards() {
        for (const card of this.cards) {
            card.matchedWith = null;
            card.flip();
        }
    }

    shuffleCards() {
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }

    selectCard(card) {
        if (card.matchedWith === null) {
            this.selectedCards.push(card);
        }

        if (this.selectedCards.length === 2) {
            const [card1, card2] = this.selectedCards;

            if (card1.imageURL === card2.imageURL && card1 !== card2) {
                card1.match(card2);
                card2.match(card1);
                this.matchedCards++;
                this.soundEffect.play('Match');
            } else {
                card1.flip();
                card2.flip();
                this.renderCardsDelayed([card1, card2]);
            }

            this.selectedCards = [];
            this.moves++;
            this.renderNumberOfMoves();

            if (this.isMatchedAllCards()) {
                this.timer.pause();
                setTimeout(() => {
                    this.endGame();
                    this.renderModal();
                }, 500);
            }

        }
    }

    isMatchedAllCards() {
        return this.matchedCards === (this.cards.length)/2;
    }

    renderCardsDelayed(cards) {
        setTimeout(() => {
            for (const card of cards) {
                card.render();
            }
        }, 500);
    }

    renderNumberOfMoves() {
        const div = document.querySelector('.moves');
        div.innerHTML = `Number of moves: ${this.moves}`;
    }

    renderTimer() {
        document.querySelector('.timer').innerHTML = `Timer: 00:00:00`;
        this.timer.addEventListener('secondsUpdated', () => {
            document.querySelector('.timer').innerHTML = (`Timer: ${this.timer.getTimeValues().toString()}`);
        });
    }

    renderModal() {
        const moveCount = document.querySelector('.move-count');
        moveCount.innerHTML = `${this.moves}`;

        const timerCount = document.querySelector('.timer-count');
        timerCount.innerHTML = `${this.timer.getTimeValues().toString()}`;
    }
}
