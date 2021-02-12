const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const modalDetails = document.querySelector('.modal-inner p');
const cardContent = document.createElement('div');

function handleCardButtonClick(event) {
  const button = event.currentTarget;

  // Grab the card, image, and description
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const title = card.querySelector('h2').textContent;
  const { description } = card.dataset;

  // Create card content element, fill it up
  cardContent.innerHTML = `
    <img src="${imgSrc}" alt="">
    <h2>${title}</h2>
    <h4>${description}</h4>
  `;

  // Pop it in
  modalDetails.insertAdjacentElement('beforebegin', cardContent);

  // Open the modal
  modalOuter.classList.add('open');
}

cardButtons.forEach((cardButton) =>
  cardButton.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
  const isOutside = !event.target.closest('.modal-inner');
  // ^this checks to see if you clicked on modal inner or one of its
  //  children. Returns TRUE if you didn't because of the bang (!).
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
