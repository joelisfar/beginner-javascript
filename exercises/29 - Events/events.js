// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// // Notes:
// // The event listener takes a an event and a callback function.
// // "Callback functions" are just regular functions. It's a function
// // that we pass to a method so the browser can call/run it whenever it
// // needs to.

// // EVENT LISTENER STEPS                 EXAMPLE
// // 1. Go get something                  butts
// // 2. Listen for something              'click'
// // 3. Then go ahead and do something.   functionName

// // WHAT IS BINDING/UNBINDING?
// // An event listener allows you to "bind" a function to an element.
// // 'removeEventListener' allows you to "unbind" a function from an element.

// // BASIC EXAMPLE
// function handleClick() {
//   console.log('It got clicked!');
// }

// butts.removeEventListener('click', handleClick);

// // MORE EXAMPLES
// function buyItem() {
//   console.log('BUYING ITEM');
// }

// function attachListener(buyButton) {
//   buyButton.addEventListener('click', buyItem);
// }
// const hooray = () => console.log('HOORAY!');

// butts.addEventListener('click', handleClick);
// coolButton.addEventListener('click', hooray);

// // FOR EACH EXAMPLES
// buyButtons.forEach(attachListener);

// buyButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('YOU CLICKED IT');
//   });
// });

const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(button.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);

  // Stop this event from bubbling up
  // event.stopPropagation();
}

// NOTES:
// currentTarget is the button, what fired the listener.
// target would be the thing inside the button you
// clicked if you clicked on a thing inside the button.

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function (event) {
  // console.log('YOU CLICKED THE WINDOW');
  // console.log(event.target);
  console.log(event.type);
  console.log(event.bubbles);
});

const photoElement = document.querySelector('.photo');

photoElement.addEventListener('mouseenter', function (event) {
  console.log(event.currentTarget);
  console.log(this);
});

// "this" is a reserved work
// The this keyword is always going to be equal to whatever comes before the dot

// The this keyword has a downside: doesn't work with arrow functions
// It's not *great* for event listener callbacks compared with event.currentTarget
