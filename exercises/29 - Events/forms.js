const returnLink = document.querySelector('.return-link');

returnLink.addEventListener('click', function (event) {
  const shouldChangePage = confirm(
    'This website might be malicious. Do you wish to proceed?'
  );

  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (event) {
  const name = event.currentTarget.name.value;
  const blockedName = 'Chad';
  if (name.includes(blockedName)) {
    alert(`Sorry bro, no ${blockedName}s allowed.`);
    event.preventDefault();
  }
});

function logEvent(event) {
  // console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('img');

function handlePhotoInput(event) {
  if (event.key === 'Enter') {
    console.log('You hit Enter on the photo');
  }
  if (event.type === 'click') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoInput);
photo.addEventListener('keyup', handlePhotoInput);
