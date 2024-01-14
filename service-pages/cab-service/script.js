document.addEventListener('DOMContentLoaded', function () {
  const cabServiceContainer = document.querySelector('.cab-service__container');

  // Check if the user has visited the page before
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    // If it's the first visit, show the text and set the flag
    cabServiceContainer.classList.remove('hidden', 'larger-font');
    cabServiceContainer.classList.add('first-visit');

    // Save the flag to local storage
    localStorage.setItem('hasVisited', true);
  } else {
    /*  */
    // If it's a subsequent visit, show the text with a larger font
    cabServiceContainer.classList.remove('hidden', 'first-visit');
    cabServiceContainer.classList.add('larger-font');
  }

  // Show the paragraph content after the font size transition
  const paragraph = cabServiceContainer.querySelector('p');
  paragraph.classList.add('show-content');
});

const cabForm = document.getElementById('cab-form');
cabForm.addEventListener('submit', e => {
  e.preventDefault();
  let formData = {
    fullName: document.getElementById('fullName').value,
    phone: document.getElementById('phone').value,
    date: document.getElementById('date').value,
    guests: document.getElementById('guests').value,
    tripType: document.getElementById('trip').value,
    cabType: document.getElementById('cab').value,
    pickUp: document.getElementById('pickUp').value,
    drop: document.getElementById('drop').value,
  };

  console.log(formData);

  let url =
    'https://wa.me/919797231194?text=' +
    'Name: ' +
    encodeURIComponent(formData.fullName) +
    '%0aPhone: ' +
    encodeURIComponent(formData.phone) +
    '%0aDate: ' +
    encodeURIComponent(formData.date) +
    '%0aGuests: ' +
    encodeURIComponent(formData.guests) +
    '%0aTrip Type: ' +
    encodeURIComponent(formData.tripType) +
    '%0aCab: ' +
    encodeURIComponent(formData.cabType) +
    '%0aPick-Up Location: ' +
    encodeURIComponent(formData.pickUp) +
    '%0aDrop Location: ' +
    encodeURIComponent(formData.drop);

  window.open(url, '_blank').focus();
});
