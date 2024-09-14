export class GameBoard {
    constructor(cards) {
        this.cards = cards;
        this.shuffleCards();
    }

    render() {
        const board = document.querySelector('.game-board');

        for (const card of this.cards) {
            board.appendChild(card.render());
        }
    }

    shuffleCards() {
        const shuffledCards = this.cards.sort(() => Math.random() - 0.5);
        this.cards = shuffledCards;
    }
}
