export class Card {
    constructor(cardDetails) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.imageURL = cardDetails.imageURL;
        this.cardBack = cardDetails.cardBack;
        this.isFlipped = false;
    }

    getCard(id) {
        if (this.id === id) {
            return this;
        }

        return null;
    }

    flip() {
        this.isFlipped = !this.isFlipped;
    }
}

export const cards = [{
    imageURL: 'CARD 1',
    cardBack: 'CARDBACK 1',
}, {
    imageURL: 'CARD 2',
    cardBack: 'CARDBACK 2',
}, {
    imageURL: 'CARD 3',
    cardBack: 'CARDBACK 3',
}, {
    imageURL: 'CARD 4',
    cardBack: 'CARDBACK 4',
}, {
    imageURL: 'CARD 5',
    cardBack: 'CARDBACK 5',
}, {
    imageURL: 'CARD 6',
    cardBack: 'CARDBACK 6',
}, {
    imageURL: 'CARD 1',
    cardBack: 'CARDBACK 1',
}, {
    imageURL: 'CARD 2',
    cardBack: 'CARDBACK 2',
}, {
    imageURL: 'CARD 3',
    cardBack: 'CARDBACK 3',
}, {
    imageURL: 'CARD 4',
    cardBack: 'CARDBACK 4',
}, {
    imageURL: 'CARD 5',
    cardBack: 'CARDBACK 5',
}, {
    imageURL: 'CARD 6',
    cardBack: 'CARDBACK 6',
}].map((cardDetails) => {
    return new Card(cardDetails);
});
