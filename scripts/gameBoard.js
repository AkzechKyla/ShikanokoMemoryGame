export class GameBoard {
    getString() {
        return 'this works';
    }

    render(cards) {
        let html = '';

        for (const card of cards) {
            html += card;
        }

        return html;
    }
}
