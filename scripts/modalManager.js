export class ModalManager {
    constructor(modals) {
        this.modals = modals;
    }

    switchModal(modalName) {
        for (const modal of this.modals) {
            if (modal === modalName) {
                document.querySelector(`.${modal}`).classList.remove('opacity-0', 'pointer-events-none');
                document.querySelector(`.${modal}`).classList.add('opacity-100');
            } else {
                document.querySelector(`.${modal}`).classList.add('opacity-0', 'pointer-events-none');
                document.querySelector(`.${modal}`).classList.remove('opacity-100');
            }
        }
    }
}
