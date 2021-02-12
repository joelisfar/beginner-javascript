// function doctorize(firstName) {
//     return `Dr. ${firstName}`;
// }

// ANONYMOUS FUNCTION
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// FUNCTION EXPRESSION
// const doctorize = function (firstName) {
//   doesntExist();
//   return `Dr. ${firstName}`;
// };

// Javascript hoists all normal functions
// but does not hoist function expressions

// Arrow functions
// Don't have their own scope when it comes to 'this'
// they're always anonymous functions

// Big version
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// smaller version
// const inchToCM = function (inches) {
//   return inches * 2.54;
// };

// Arrow version
// const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 2,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 2 });

// IIFE
// Immediately Invoked Function Expression

// (function (age) {
//   return `You are cool and age ${age}`;
// })(10);

// Methods
const joel = {
  name: 'Joel Farris',
  // Method
  sayHi() {
    console.log(`Hey ${this.name}!`);
  },
  // Short hand method
  yellHi() {
    console.log(`HEY ${joel.name.toUpperCase()}!!!`);
  },
  // Arrow function
  whisperHi: () => {
    console.log(`hii ${joel.name.toLowerCase()}.`);
  },
};

// Callback Functions
// Click callback!!!
const button = document.querySelector('.click-me');

function handleClick() {
  console.log('Great clicking!!!');
}

// This is a callback function -
// A function that gets passed into another function
button.addEventListener('click', function () {
  this.innerHTML = this.textContent.toUpperCase();
});

// Timer Callback
// setTimeout(() => {
//   console.log('Done! Time to eat.');
// }, 1000);
