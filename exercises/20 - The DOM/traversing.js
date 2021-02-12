const joel = document.querySelector('.joel');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I will be removed';
document.body.appendChild(myParagraph);

myParagraph.remove();

console.log(myParagraph);
