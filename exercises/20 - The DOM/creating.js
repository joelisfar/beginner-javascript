const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph.';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://placehold.it/400x400';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// Oh shoot! We need to add something to the top. Like a heading!

const myHeading = document.createElement('h2');
myHeading.textContent = 'Cool heading';

myDiv.insertAdjacentElement('afterbegin', myHeading);

// <ul>
// <li>One</li>
// <li>Two</li>
// <li>Three</li>
// <li>Four</li>
// <li>Five</li>
// </ul>

const myList = document.createElement('ul');

myDiv.appendChild(myList);

const firstItem = document.createElement('li');
firstItem.textContent = 'One';
const secondItem = document.createElement('li');
secondItem.textContent = 'Two';
const thirdItem = document.createElement('li');
thirdItem.textContent = 'Three';
const fourthItem = document.createElement('li');
fourthItem.textContent = 'Four';
const fifthItem = fourthItem.cloneNode();
fifthItem.textContent = 'Five';

myList.append(firstItem);

myList.insertAdjacentElement('beforeend', fifthItem);

firstItem.insertAdjacentElement('afterend', secondItem);

fifthItem.insertAdjacentElement('beforebegin', fourthItem);

fourthItem.insertAdjacentElement('beforebegin', thirdItem);
