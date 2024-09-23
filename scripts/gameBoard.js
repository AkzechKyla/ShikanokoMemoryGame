export class GameBoard {
    constructor(gameScenes, modals, cards) {
        this.gameScenes = gameScenes;
        this.modals = modals;

        this.cards = cards;
        this.shuffleCards();

        this.matchedCards = 0;

        this.selectedCards = [];
        this.moves = 0;
        this.renderNumberOfMoves();
    }

    startGame() {
        this.gameScenes.switchScene('game');
        this.render();

        this.timer = new Timer();
        this.timer.start();
        this.renderTimer();
    }

    restartGame() {
        this.modals.hideModal('end-game');
    }

    endGame() {
        this.modals.showModal('end-game');
        this.renderModal();
    }

    render() {
        const board = document.querySelector('.game-board');

        for (const card of this.cards) {
            const cardElement = card.render();
            cardElement.addEventListener('click', () => this.selectCard(card));
            board.appendChild(cardElement);
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
