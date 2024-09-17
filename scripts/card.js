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
    imageURL: 'https://i.pinimg.com/736x/19/59/83/1959833460da93ea63ee9404b159624d.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/4e/ed/a3/4eeda30f3c116270f1505d8cb107b329.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/b6/84/11/b684114961804efe7790af4315a8f742.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/29/11/32/29113238141dfedeacd46c2fdf989989.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/4e/1a/8f/4e1a8f51e93ddfe3a16020d8551bc485.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/05/49/a4/0549a427a95edcb90a33d52b8a0ffb6f.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/19/59/83/1959833460da93ea63ee9404b159624d.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/4e/ed/a3/4eeda30f3c116270f1505d8cb107b329.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/b6/84/11/b684114961804efe7790af4315a8f742.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/29/11/32/29113238141dfedeacd46c2fdf989989.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/4e/1a/8f/4e1a8f51e93ddfe3a16020d8551bc485.jpg',
}, {
    imageURL: 'https://i.pinimg.com/736x/05/49/a4/0549a427a95edcb90a33d52b8a0ffb6f.jpg',
}].map((cardDetails) => {
    return new Card(cardDetails);
});
