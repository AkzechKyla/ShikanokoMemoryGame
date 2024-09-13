export class Card {
    constructor(cardDetails) {
        this.id = cardDetails.id;
        this.value = cardDetails.imageURL;
        this.cardBack = cardDetails.cardBack;
        this.isFlipped = false;
    }

    getCard(id) {
        if (this.id === id) {
            return this.card;
        }

        return null;
    }
}

export const cards = [{
    id: '1',
    imageURL: 'CARD 1',
    cardBack: 'CARDBACK 1',
}, {
    id: '2',
    imageURL: 'CARD 2',
    cardBack: 'CARDBACK 2',
}, {
    id: '3',
    imageURL: 'CARD 3',
    cardBack: 'CARDBACK 3',
}, {
    id: '4',
    imageURL: 'CARD 4',
    cardBack: 'CARDBACK 4',
}, {
    id: '5',
    imageURL: 'CARD 5',
    cardBack: 'CARDBACK 5',
}, {
    id: '6',
    imageURL: 'CARD 6',
    cardBack: 'CARDBACK 6',
}, {
    id: '7',
    imageURL: 'CARD 1',
    cardBack: 'CARDBACK 1',
}, {
    id: '8',
    imageURL: 'CARD 2',
    cardBack: 'CARDBACK 2',
}, {
    id: '9',
    imageURL: 'CARD 3',
    cardBack: 'CARDBACK 3',
}, {
    id: '10',
    imageURL: 'CARD 4',
    cardBack: 'CARDBACK 4',
}, {
    id: '11',
    imageURL: 'CARD 5',
    cardBack: 'CARDBACK 5',
}, {
    id: '12',
    imageURL: 'CARD 6',
    cardBack: 'CARDBACK 6',
}].map((cardDetails) => {
    return new Card(cardDetails);
});
