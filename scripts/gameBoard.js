export class GameBoard {
    cardsURL = [];

    constructor(cards) {
        this.cards = cards;

        for (const card of this.cards) {
            this.cardsURL.push(card.url);
        }
    }

    render() {
        let html = '';

        for (const url of this.cardsURL) {
            html += `<div class="card">${url}</div>`;
        }

        return html;
    }
}
