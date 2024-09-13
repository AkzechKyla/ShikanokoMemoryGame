export class GameBoard {
    cardsURL = [];

    constructor(cards) {
        this.cards = cards;
    }

    render() {
        let html = '';

        for (const card of this.cards) {
            this.cardsURL.push(card.url);
        }

        this.cardsURL.forEach((url, i) => {
            html += `<div class="card" data-id="${i}">${url}</div>`;
        });

        return html;
    }

    shuffleCards() {
        const shuffledCards = this.cards.sort(() => Math.random() - 0.5);
        this.cards = shuffledCards;
    }
}
