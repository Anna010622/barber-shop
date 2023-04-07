(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', onOpenModal);
  });
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onCloseModal);

  function onOpenModal() {
    refs.modal.classList.remove('is-hidden');
    refs.body.classList.add('noScroll');
    window.addEventListener('keydown', onEscKeyPress);
  }

  function onCloseModal() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('noScroll');
    window.removeEventListener('keydown', onEscKeyPress);
  }

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      onCloseModal();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }
})();
