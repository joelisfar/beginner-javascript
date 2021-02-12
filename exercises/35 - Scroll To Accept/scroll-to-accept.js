const button = document.querySelector('.accept');
const terms = document.querySelector('.terms-and-conditions');
const wrapper = document.querySelector('.wrapper');

function scrollToAccept() {
  if (!terms) {
    return; // End here if this element isn’t on the page
  }

  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;

      // Stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
  }
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();

function acceptTerms() {
  button.addEventListener('click', function () {
    button.classList.add('processing');
    window.setTimeout(() => {
      wrapper.classList.add('accepted');
      wrapper.addEventListener('transitionend', function () {
        wrapper.remove();
        window.setTimeout(() => {
          window.alert('You did it!');
        }, 250);
      });
    }, 450);
  });
}

acceptTerms();
