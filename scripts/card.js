export class Card {
    constructor(imageURL) {
        this.id = "id" + Math.random().toString(16).slice(2);
        this.imageURL = imageURL;
        this.cardBack = 'https://media1.tenor.com/m/gu5VNpOajbUAAAAC/deer-light.gif';
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
        if (this.matchedWith === null) {
            this.isFlipped = !this.isFlipped;
        }
    }

    match(card) {
        this.matchedWith = card;
    }

    getHTML() {
        let html = '';

        if (this.isFlipped) {
            html = `<img
                src="${this.imageURL}"
                class="object-cover"
            />`;
        } else {
            html = `<img
                src="${this.cardBack}"
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
