function Modal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  this.init = function (openSelector, closeSelector) {
    const openButton = document.querySelector(openSelector);
    openButton.addEventListener('click', this.openModal);

    const closeButton = document.querySelector(closeSelector);
    closeButton.addEventListener('click', this.closeModal);

    window.addEventListener('click', (event) => this.closeModalOutside(event))
  }

  this.openModal = function () {
    modal.classList.add('modal__open');
  }

  this.closeModal = function () {
    modal.classList.remove('modal__open');
  }

  this.closeModalOutside = function (event) {
    if(event.target === modal) {
      this.closeModal();
    }
  }
}

const modal = new Modal('.js--modal');
modal.init('.js--open', '.js--modal__close')

const modal2 = new Modal('.js--modal2');
modal2.init('.js--open2', '.js--modal2 .js--modal__close')