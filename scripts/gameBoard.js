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
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }

    getCardById(cardId) {
        return this.cards.find(card => card.id === cardId) || null;
    }
}
