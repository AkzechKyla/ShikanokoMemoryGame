export class Modal {
    constructor(modal) {
        this.modal = document.querySelector(`.${modal}`);
    }

    showModal() {
        this.modal.classList.remove('opacity-0', 'pointer-events-none');
        this.modal.classList.add('opacity-100');
    }

    hideModal() {
        this.modal.classList.add('opacity-0', 'pointer-events-none');
        this.modal.classList.remove('opacity-100');
    }
}
