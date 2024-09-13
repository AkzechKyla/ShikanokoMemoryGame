export class GameBoard {
    constructor(cards) {
        this.cards = cards;
    }

    render() {
        let html = '';

        this.cards.forEach((card) => {
            html += `<div class="card" data-id="${card.id}" onclick="flipCard(this)">${card.cardBack}</div>`;
        });

        return html;
    }

    shuffleCards() {
        const shuffledCards = this.cards.sort(() => Math.random() - 0.5);
        this.cards = shuffledCards;
    }
}
