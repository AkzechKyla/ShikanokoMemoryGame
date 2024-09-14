export class GameBoard {
    constructor(cards) {
        this.cards = cards;
        this.selectedCards = [];
        this.shuffleCards();
    }

    render() {
        const board = document.querySelector('.game-board');

        for (const card of this.cards) {
            const cardElement = card.render();
            cardElement.addEventListener('click', (event) => this.selectCard(event));
            board.appendChild(cardElement);
        }
    }

    shuffleCards() {
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }

    getCardById(cardId) {
        return this.cards.find(card => card.id === cardId) || null;
    }

    selectCard(event) {
        const id = event.target.dataset.id;
        const selectedCard = this.getCardById(id);

        if (selectedCard) {
            this.selectedCards.push(selectedCard)
        }

        if (this.selectedCards.length === 2) {
            this.checkForMatch();
        }
    }

    checkForMatch() {
        const [card1, card2] = this.selectedCards;
        if (card1.imageURL === card2.imageURL) {
            card1.match();
            card2.match();
        }

        console.log(card1);
        console.log(card2);
    }
}
