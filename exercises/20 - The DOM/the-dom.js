// const heading = document.querySelector('h2');

// console.log(heading.textContent);

// set the textContent property on that element
// heading.textContent = 'Joel is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);

// console.log(`
// innerHTML:
//     ${heading.innerHTML}
// `);
// console.log(`
// outerHTML:
//       ${heading.outerHTML}
// `);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent}🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
// console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'A person';

// pic.setAttribute('alt', 'nice person');

// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');

custom.addEventListener('click', function () {
  alert(`This photo is of ${this.dataset.name} in ${this.dataset.place}`);
});
