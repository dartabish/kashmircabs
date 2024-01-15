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

  let url =
    'https://wa.me/917006888129?text=' +
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
