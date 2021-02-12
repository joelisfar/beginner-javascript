// 1.
// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
//            ^
// Note: appendChild() is better for an element,
//       append() is better for lots of stuff,
//       like a string of lots of elements.

// 2.
// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

const myList = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;
myDiv.innerHTML = myList;
const myListElement = myDiv.querySelector('ul');

// 3.
// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = `https://placehold.it/500`;

// set the width to 250
myImage.width = `250`;
myImage.height = `250`;

// add a class of cute
myImage.classList.add('cute');

// add an alt of Cute Puppy
myImage.alt = `Placeholder`;

// Append that image to the wrapper
myDiv.appendChild(myImage);

// 4.
// with HTML string, make a div, with two paragraphs inside of it
const myContentHTML = `
  <p>This is the first paragraph</p>
  <p>This is the second paragraph</p>
`;
const myContentDiv = document.createElement('div');
myContentDiv.innerHTML = myContentHTML;

// put this div before the unordered list from above
myListElement.insertAdjacentElement('beforebegin', myContentDiv);

// add a class to the second paragraph called warning
myContentDiv.lastElementChild.classList.add('warning');

// remove the first paragraph
myContentDiv.firstElementChild.remove();

// 5.
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="player-card">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const cardDiv = document.createElement('div');
  const playerCardTemplate = `
      <h2>${name} — ${age}</h2>
      <p>
        They are ${height} inches and ${age} years old.
        In Dog years this person would be ${age * 7}. That would be a tall dog!
        </p>
    `;
  cardDiv.classList.add('player-card');
  cardDiv.innerHTML = playerCardTemplate;

  return cardDiv;
}

// 6.
// make a new div with a class of cards
const playerCards = document.createElement('div');
playerCards.classList.add('cards');

// make 4 player cards using generatePlayerCard
const cardOne = generatePlayerCard('Joel', 32, 70);
const cardTwo = generatePlayerCard('Jillian', 33, 60);
const cardThree = generatePlayerCard('Julian', 32, 75);
const cardFour = generatePlayerCard('Ben', 37, 73);

// append those cards to the div
playerCards.appendChild(cardOne);
playerCards.appendChild(cardTwo);
playerCards.appendChild(cardThree);
playerCards.appendChild(cardFour);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', playerCards);

// 7.
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const cards = document.querySelectorAll('.player-card');
cards.forEach((card) => {
  const deletionButton = document.createElement('button');
  deletionButton.innerText = 'Remove';
  deletionButton.type = 'button';
  deletionButton.classList.add('removal-button');
  card.appendChild(deletionButton);
});

// make out delete function
// select all the buttons!
// loop over them and attach a listener

function deleteCard(event) {
  const clickedButton = event.currentTarget;
  clickedButton.closest('.player-card').remove();
}

const deletionButtons = document.querySelectorAll('.removal-button');
deletionButtons.forEach((deletionButton) =>
  deletionButton.addEventListener('click', deleteCard)
);
