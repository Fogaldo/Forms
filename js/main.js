let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector('.modal_close');

closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.toggle('active');
}