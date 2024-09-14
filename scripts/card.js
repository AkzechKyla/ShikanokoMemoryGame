export class Card {
    constructor(cardDetails) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.imageURL = cardDetails.imageURL;
        this.cardBack = cardDetails.cardBack;
        this.isFlipped = false;
        this.isMatched = false;
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

    match() {
        this.isMatched = !this.isMatched;
    }

    getHTML() {
        let html = '';

        if (this.isFlipped) {
            html = this.imageURL;
        } else {
            html = this.cardBack;
        }

        return html;
    }

    render() {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = this.id;
        cardElement.addEventListener('click', () => {
            this.flip();
            cardElement.innerHTML = this.getHTML();
        });
        cardElement.innerHTML = this.getHTML();
        return cardElement;
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
