const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  let url =
    'https://wa.me/917006888129?text=' +
    'You have a visitor!' +
    '%0aName: ' +
    encodeURIComponent(name) +
    '%0aPhone: ' +
    encodeURIComponent(phone) +
    '%0aEmail: ' +
    encodeURIComponent(email) +
    '%0aMessage: ' +
    encodeURIComponent(message);

  window.open(url, '_blank').focus();
});
