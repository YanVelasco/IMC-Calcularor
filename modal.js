export const Modal = {
  wrapper: document.querySelector(".modal__wrapper"),
  message: document.querySelector(".modal span"),
  BtnClose: document.querySelector(".close"),
  open() {
    Modal.wrapper.classList.toggle("open");
  },
  close() {
    Modal.wrapper.classList.toggle("open");
  },
};

Modal.BtnClose.onclick = () => {
  Modal.close();
};

window.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}