const carsContainer = document.querySelector('.cars-container');
const bikesContainer = document.querySelector('.bikes-container');
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
const bikeCollection = [
  {
    id: 'bike-1',
    name: 'Royal Enfield Himalayan',
    seats: 2,
    image: '../../assets/sub-pages/car-rental/himalyan.png',
  },
  {
    id: 'bike-2',
    name: 'Royal Enfield Classic',
    seats: 2,
    image: '../../assets/sub-pages/car-rental/classic.png',
  },
  {
    id: 'bike-3',
    name: 'Royal Enfield Thunderbird',
    seats: 2,
    image: '../../assets/sub-pages/car-rental/royal thunderbird.png',
  },
];

displayVehicles(carCollection, carsContainer);

vehicleBtns = document.querySelectorAll('.vehicle-btn');
vehicleBtns.forEach(vehicleBtn => {
  vehicleBtn.addEventListener('click', e => {
    const vehicleCategoriesID = ['cars', 'bikes'];
    vehicleCategoriesID.forEach(vehicleCategoryID => {
      if (e.target.id === `${vehicleCategoryID}-btn`) {
        document.querySelector(`.${vehicleCategoryID}-container`).innerHTML =
          '';
        document.querySelector(
          `.${vehicleCategoryID}-container`
        ).style.display = 'flex';

        switch (vehicleCategoryID) {
          case 'cars':
            displayVehicles(carCollection, carsContainer);
            break;

          case 'bikes':
            displayVehicles(bikeCollection, bikesContainer);
            break;
        }
      } else {
        document.querySelector(
          `.${vehicleCategoryID}-container`
        ).style.display = 'none';
      }
    });
  });
});

function getFormData(vehicleId) {
  return {
    serviceType: document.getElementById(`floatingService${vehicleId}`).value,
    selectedVehicle: document.getElementById(`floatingVehicle${vehicleId}`)
      .value,
    name: document.getElementById(`floatingFullName${vehicleId}`).value,
    phone: document.getElementById(`floatingPhone${vehicleId}`).value,
    date: document.getElementById(`floatingDate${vehicleId}`).value,
    time: document.getElementById(`floatingTime${vehicleId}`).value,
    email: document.getElementById(`floatingEmail${vehicleId}`).value,
    message: document.getElementById(`floatingMessage${vehicleId}`).value,
  };
}

function displayVehicles(object, container) {
  object.forEach(vehicle => {
    let card = document.createElement('div');
    card.className = 'vehicle-card';

    let cardContent = `
            <div class="vehicle-img-container">
            <img src="${vehicle.image}" alt="${vehicle.name} Image"/>
            </div>
            <h3 class="vehicle-title">${vehicle.name}</h3>
            <div class="d-flex align-items-center justify-content-between">
            <div >
              <span class="vehicle-capacity">
              <i class="fa-solid fa-user"></i>
              Seats: ${vehicle.seats} </span>
              <span class="vehicle-baggage">
              <i class="fa-solid fa-suitcase-rolling"></i>
              Baggage :${vehicle.baggage} </span>
            </div>
            <button type="button" class="book btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${vehicle.id}">
              Book Now
            </button>
            </div>  

            <!-- Modal -->
            <div
               class="modal fade"
               id="exampleModal${vehicle.id}"
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
              <form id="bookingForm${vehicle.id}" class="booking-form" data-vehicle-id="${vehicle.id}"  method="POST">
              <div class="form-floating mb-2">
              <input
              value="Vehicle Rental"
              type="text"
              name="Selected Service"
              class="form-control"
              id="floatingService${vehicle.id}"
              placeholder="Selected Service"
              required
              />
            <label for="floatingService${vehicle.id}">Selected Service</label>
            </div>
              <div class="form-floating mb-2">
              <input
              value="${vehicle.name}"
              type="text"
              name="Selected Vehicle"
              class="form-control"
              id="floatingVehicle${vehicle.id}"
              placeholder="Selected Vehicle"
              required
              />
            <label for="floatingVehicle${vehicle.id}">Selected Car</label>
            </div>
                <div class="form-floating mb-2">
                  <input
                  type="text"
                  name="Full Name"
                  class="form-control"
                  id="floatingFullName${vehicle.id}"
                  placeholder="Full Name"
                  required
                  />
                <label for="floatingFullName${vehicle.id}">Full Name</label>
                </div>
                <div class="form-floating mb-2">
                 <input
                 type="tel"
                 name="Phone"
                 class="form-control"
                 id="floatingPhone${vehicle.id}"
                 placeholder="Phone"
                  required
                 />
                  <label for="floatingPhone${vehicle.id}">Phone</label>
                </div>
                <div class="row ps-2 pe-2">
                   <div class="form-floating mb-2 col p-1">
                      <input
                      type="date"
                      name="Date"
                      class="form-control"
                      id="floatingDate${vehicle.id}"
                      placeholder="Select Date"
                      required
                      />
                      <label for="floatingDate${vehicle.id}">Select Date</label>
                   </div>
                   <div class="form-floating mb-2 col p-1">
                      <input
                       type="time"
                       name="Time"
                       class="form-control"
                       id="floatingTime${vehicle.id}"
                       placeholder="Select Time"
                       required
                      />
                      <label for="floatingTime${vehicle.id}">Select Time</label>
                   </div>
                 </div>
                 <div class="form-floating mb-2">
                   <input
                    type="email"
                    name="Email"
                    class="form-control"
                    id="floatingEmail${vehicle.id}"
                    placeholder="Email" 
                   />
                   <label for="floatingEmail${vehicle.id}">Email (Optional)</label>
                 </div>
                 <div class="form-floating mb-2">
                    <textarea
                     class="form-control"
                     name="Message"
                     id="floatingMessage${vehicle.id}"
                     placeholder="Message"
                     rows="4"
                    cols="50"
                    ></textarea>
                    <label for="floatingMessage${vehicle.id}">Message</label>
                 </div>
               <button id="submitForm" type="submit" class="send-enquiry btn btn-warning mt-2">Send Enquiry</button>
             </form>
           
          </div>
         </div>
      </div>
    `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}

/* document
  .getElementById(`bookingForm${vehicle.id}`)
  .addEventListener('submit', e => {
    console.log('work');
    e.preventDefault();

    const formData = getFormData(vehicle.id);

    let url = 'https://wa.me/919797231194?text=';
    for (const [key, value] of Object.entries(formData)) {
      url += `${key}: ${encodeURIComponent(value)}%0a`;
    }

    window.open(url, '_blank').focus();
  });
 */

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Extract form data
  let vehicleId = event.target.getAttribute('data-vehicle-id');
  let formData = {
    service: event.target.querySelector(`#floatingService${vehicleId}`).value,
    vehicle: event.target.querySelector(`#floatingVehicle${vehicleId}`).value,
    fullName: event.target.querySelector(`#floatingFullName${vehicleId}`).value,
    phone: event.target.querySelector(`#floatingPhone${vehicleId}`).value,
    date: event.target.querySelector(`#floatingDate${vehicleId}`).value,
    time: event.target.querySelector(`#floatingTime${vehicleId}`).value,
    email: event.target.querySelector(`#floatingEmail${vehicleId}`).value,
    message: event.target.querySelector(`#floatingMessage${vehicleId}`).value,
  };

  let url = 'https://wa.me/919797231194?text=';
  for (const [key, value] of Object.entries(formData)) {
    url += `${key}: ${encodeURIComponent(value)}%0a`;
  }

  window.open(url, '_blank').focus();
}

// Add a global event listener for form submissions
document.addEventListener('submit', function (event) {
  if (event.target.classList.contains('booking-form')) {
    handleFormSubmission(event);
  }

  location.reload();
});

// Call displayVehicles function to display product cards
// displayVehicles(object, container);
