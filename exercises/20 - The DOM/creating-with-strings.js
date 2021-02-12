const item = document.querySelector('.item');

const size = 400;
const src = `https://placehold.it/${size}`;
const desc = `A picture from a variable!`;

const myHTML = `
<div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt=""/>
</div>
`;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

console.log(myFragment.querySelector('img'));

document.body.append(myFragment);
