const carsContainer = document.querySelector('.cars-container');
const defaultImagePath = '../../assets/sub-pages/car-rental';
const carCollection = [
  {
    id: 'car-1',
    name: 'Toyota Etios',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/etios.png',
  },
  {
    id: 'car-2',
    name: 'Honda Amaze',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/amaze.png',
  },
  {
    id: 'car-3',
    name: 'Maruti Swift DZire',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/dzire.png',
  },
  {
    id: 'car-4',
    name: 'Toyota Glanza',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/glanza.png',
  },
  {
    id: 'car-5',
    name: 'Toyota Innova ',
    seats: 6,
    baggage: 5,
    image: '../../assets/sub-pages/car-rental/innova.png',
  },
  {
    id: 'car-6',
    name: 'Toyota Crysta Luxury',
    seats: 6,
    baggage: 5,
    image: '../../assets/sub-pages/car-rental/crysta.png',
  },
  {
    id: 'car-7',
    name: 'Maruti Suzuki Ertiga',
    seats: 6,
    baggage: 4,
    image: '../../assets/sub-pages/car-rental/ertiga.png',
  },
  {
    id: 'car-8',
    name: 'Chevrolet Tavera',
    seats: 8,
    baggage: 6,
    image: '../../assets/sub-pages/car-rental/chevrolet-tavera.png',
  },
  {
    id: 'car-9',
    name: 'Tempo Traveller 12',
    seats: 12,
    baggage: 8,
    image: '../../assets/sub-pages/car-rental/tempo12.png',
  },
  {
    id: 'car-10',
    name: 'Tempo Traveller 17',
    seats: 17,
    baggage: 15,
    image: '../../assets/sub-pages/car-rental/tempo-17.png',
  },
  {
    id: 'car-11',
    name: 'Tempo Traveller 25',
    seats: 25,
    baggage: 15,
    image: '../../assets/sub-pages/car-rental/tempo.png',
  },
  {
    id: 'car-12',
    name: 'Urbania',
    seats: 17,
    baggage: 12,
    image: '../../assets/sub-pages/car-rental/urbania.png',
  },
];

carCollection.forEach(car => {
  let card = document.createElement('div');
  card.className = 'car-card';

  let cardContent = `
  <div class="car-img-container">
  <img src="${car.image}" alt="${car.name} Image"/>
  </div>
  <h3 class="car-title">${car.name}</h3>
  <div class="car-details d-flex align-items-center justify-content-between">
  <div >
    <span class="car-capacity">
    <i class="fa-solid fa-user "></i>
    Seats: ${car.seats} </span>
    <span class="car-baggage">
    <i class="fa-solid fa-suitcase-rolling"></i>
    Baggage: ${car.baggage} </span>
  </div>
  <button type="button" class="book btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${car.id}">
    Book Now
  </button>
  </div>  

  <!-- Modal -->
  <div
     class="modal fade"
     id="exampleModal${car.id}"
     tabindex="-1"
     aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >
  <div class="modal-dialog">
    <div class="modal-content p-4">
      <div class="d-flex">
          <h4>Your Booking Details</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    <hr>
    <div class="booking-details">
    </div>
    <form id="bookingForm${car.id}" class="booking-form" data-car-id="${car.id}"  method="POST">
    <div class="form-floating mb-2">
    <input
    value="Chaffeur-Driven"
    type="text"
    name="Selected Service"
    class="form-control"
    id="floatingService${car.id}"
    placeholder="Selected Service"
    required
    />
  <label for="floatingService${car.id}">Selected Service</label>
  </div>
    <div class="form-floating mb-2">
    <input
    value="${car.name}"
    type="text"
    name="Selected car"
    class="form-control"
    id="floatingCar${car.id}"
    placeholder="Selected car"
    required
    />
  <label for="floatingCar${car.id}">Selected Car</label>
  </div>
      <div class="form-floating mb-2">
        <input
        type="text"
        name="Full Name"
        class="form-control"
        id="floatingFullName${car.id}"
        placeholder="Full Name"
        required
        />
      <label for="floatingFullName${car.id}">Full Name</label>
      </div>
      <div class="form-floating mb-2">
       <input
       type="tel"
       name="Phone"
       class="form-control"
       id="floatingPhone${car.id}"
       placeholder="Phone"
        required
       />
        <label for="floatingPhone${car.id}">Phone</label>
      </div>
      <div class="row ps-2 pe-2">
         <div class="form-floating mb-2 col p-1">
            <input
            type="date"
            name="Date"
            class="form-control"
            id="floatingDate${car.id}"
            placeholder="Select Date"
            required
            />
            <label for="floatingDate${car.id}">Select Date</label>
         </div>
         <div class="form-floating mb-2 col p-1">
            <input
             type="time"
             name="Time"
             class="form-control"
             id="floatingTime${car.id}"
             placeholder="Select Time"
             required
            />
            <label for="floatingTime${car.id}">Select Time</label>
         </div>
       </div>
       <div class="form-floating mb-2">
         <input
          type="email"
          name="Email"
          class="form-control"
          id="floatingEmail${car.id}"
          placeholder="Email" 
         />
         <label for="floatingEmail${car.id}">Email (Optional)</label>
       </div>
       <div class="form-floating mb-2">
          <textarea
           class="form-control"
           name="Message"
           id="floatingMessage${car.id}"
           placeholder="Message"
           rows="4"
          cols="50"
          ></textarea>
          <label for="floatingMessage${car.id}">Message</label>
       </div>
     <button id="submitForm" type="submit" class="send-enquiry btn btn-warning mt-2">Send Enquiry</button>
   </form>
 
</div>
</div>
</div>
  `;

  card.innerHTML = cardContent;
  carsContainer.appendChild(card);
});

function getFormData(carId) {
  return {
    serviceType: document.getElementById(`floatingService${carId}`).value,
    selectedVehicle: document.getElementById(`floatingVehicle${carId}`).value,
    name: document.getElementById(`floatingFullName${carId}`).value,
    phone: document.getElementById(`floatingPhone${carId}`).value,
    date: document.getElementById(`floatingDate${carId}`).value,
    time: document.getElementById(`floatingTime${carId}`).value,
    email: document.getElementById(`floatingEmail${carId}`).value,
    message: document.getElementById(`floatingMessage${carId}`).value,
  };
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Extract form data
  let carId = event.target.getAttribute('data-car-id');
  let formData = {
    service: event.target.querySelector(`#floatingService${carId}`).value,
    vehicle: event.target.querySelector(`#floatingCar${carId}`).value,
    fullName: event.target.querySelector(`#floatingFullName${carId}`).value,
    phone: event.target.querySelector(`#floatingPhone${carId}`).value,
    date: event.target.querySelector(`#floatingDate${carId}`).value,
    time: event.target.querySelector(`#floatingTime${carId}`).value,
    email: event.target.querySelector(`#floatingEmail${carId}`).value,
    message: event.target.querySelector(`#floatingMessage${carId}`).value,
  };

  let url =
    'https://wa.me/917006888129?text=' +
    'Selected Service: ' +
    encodeURIComponent(formData.service) +
    '%0aSelected Vehicle: ' +
    encodeURIComponent(formData.vehicle) +
    '%0aName: ' +
    encodeURIComponent(formData.fullName) +
    '%0aPhone: ' +
    encodeURIComponent(formData.phone) +
    '%0aDate: ' +
    encodeURIComponent(formData.date) +
    '%0aTime: ' +
    encodeURIComponent(formData.time) +
    '%0aEmail: ' +
    encodeURIComponent(formData.email) +
    '%0aMessage: ' +
    encodeURIComponent(formData.message);

  window.open(url, '_blank').focus();
}

// Add a global event listener for form submissions
document.addEventListener('submit', function (event) {
  if (event.target.classList.contains('booking-form')) {
    handleFormSubmission(event);
  }

  location.reload();
});
