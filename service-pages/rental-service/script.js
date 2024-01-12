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
    id: 'car-1',
    name: 'Tempo Traveller 17',
    seats: 17,
    baggage: 15,
    image: '../../assets/sub-pages/car-rental/tempo-17.png',
  },
  {
    id: 'car-1',
    name: 'Tempo Traveller 25',
    seats: 25,
    baggage: 15,
    image: '../../assets/sub-pages/car-rental/tempo.png',
  },
  {
    id: 'car-1',
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
    image: '../../assets/sub-pages/car-rental/thunderbird.png',
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
               <p>Selected Vehicle : ------------- ${vehicle.name}</p>
              </div>
              <div class="contact-and-pickup-details">
              <h4>Contact and Pickup Details</h4>
              <hr>
              <form id="bookingForm${vehicle.id}" action="https://formspree.io/f/xwkgplyq"  method="POST">
                <div class="form-floating mb-2">
                  <input
                  type="text"
                  name="Full Name"
                  class="form-control"
                  id="floatingFullName"
                  placeholder="Full Name"
                  required
                  />
                <label for="floatingFullName">Full Name</label>
                </div>
                <div class="form-floating mb-2">
                 <input
                 type="tel"
                 name="Phone"
                 class="form-control"
                 id="floatingPhone"
                 placeholder="Phone"
                  required
                 />
                  <label for="floatingPhone">Phone</label>
                </div>
                <div class="row ps-2 pe-2">
                   <div class="form-floating mb-2 col p-1">
                      <input
                      type="date"
                      name="Date"
                      class="form-control"
                      id="floatingDate"
                      placeholder="Select Date"
                      required
                      />
                      <label for="floatingDate">Select Date</label>
                   </div>
                   <div class="form-floating mb-2 col p-1">
                      <input
                       type="time"
                       name="Time"
                       class="form-control"
                       id="floatingTime"
                       placeholder="Select Time"
                       required
                      />
                      <label for="floatingTime">Select Time</label>
                   </div>
                 </div>
                 <div class="form-floating mb-2">
                   <input
                    type="email"
                    name="Email"
                    class="form-control"
                    id="floatingEmail"
                    placeholder="Email" 
                   />
                   <label for="floatingEmail">Email (Optional)</label>
                 </div>
                 <div class="form-floating mb-2">
                    <textarea
                     class="form-control"
                     name="Message"
                     id="floatingMessage"
                     placeholder="Message"
                     rows="4"
                    cols="50"
                    ></textarea>
                    <label for="floatingMessage">Message</label>
                 </div>
               <button type="submit" class="send-enquiry btn btn-warning mt-2">Send Enquiry</button>
             </form>
            </div>
          </div>
         </div>
      </div>
    `;
    card.innerHTML = cardContent;
    container.appendChild(card);
  });
}
