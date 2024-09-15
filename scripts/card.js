export class Card {
    constructor(cardDetails) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.imageURL = cardDetails.imageURL;
        this.cardBack = cardDetails.cardBack;
        this.isFlipped = false;
        this.matchedWith = null;

        this.element = document.createElement('div');
        this.element.classList.add('card');
        this.element.addEventListener('click', () => {
            this.flip();
            this.element.innerHTML = this.getHTML();
        });
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

    match(card) {
        this.matchedWith = card;
    }

    getHTML() {
        let html = '';

        if (this.isFlipped) {
            html = this.imageURL;
        } else {
            html = `<img
                src="https://media1.tenor.com/m/gu5VNpOajbUAAAAC/deer-light.gif"
                class="object-cover"
            />`;
        }

        return html;
    }

    render() {
        this.element.innerHTML = this.getHTML();
        return this.element;
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
