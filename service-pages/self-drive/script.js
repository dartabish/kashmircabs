const carsContainer = document.querySelector('.cars-container');
const defaultImagePath = '../../assets/sub-pages/car-rental';
const carCollections = [
  {
    name: 'Toyota Etios',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/etios.png',
  },
  {
    name: 'Honda Amaze',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/amaze.png',
  },
  {
    name: 'Maruti Swift DZire',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/dzire.png',
  },
  {
    name: 'Toyota Glanza',
    seats: 4,
    baggage: 3,
    image: '../../assets/sub-pages/car-rental/glanza.png',
  },
  {
    name: 'Toyota Innova ',
    seats: 6,
    baggage: 5,
    image: '../../assets/sub-pages/car-rental/innova.png',
  },
  {
    name: 'Toyota Crysta Luxury',
    seats: 6,
    baggage: 5,
    image: '../../assets/sub-pages/car-rental/crysta.png',
  },
  {
    name: 'Maruti Suzuki Ertiga',
    seats: 6,
    baggage: 4,
    image: '../../assets/sub-pages/car-rental/ertiga.png',
  },
  {
    name: 'Chevrolet Tavera',
    seats: 8,
    baggage: 6,
    image: '../../assets/sub-pages/car-rental/chevrolet-tavera.png',
  },
  {
    name: 'Tempo Traveller 12',
    seats: 12,
    baggage: 8,
    image: '../../assets/sub-pages/car-rental/tempo12.png',
  },
  {
    name: 'Tempo Traveller 17',
    seats: 17,
    baggage: 15,
    image: '../../assets/sub-pages/car-rental/tempo-17.png',
  },
  {
    name: 'Tempo Traveller 25',
    seats: 25,
    baggage: 15,
    image: '../../assets/sub-pages/car-rental/tempo.png',
  },
  {
    name: 'Urbania',
    seats: 17,
    baggage: 12,
    image: '../../assets/sub-pages/car-rental/urbania.png',
  },
];

carCollections.forEach(car => {
  let card = document.createElement('div');
  card.className = 'car-card';

  let cardContent = `
          <div class="car-img-container">
            <img src="${car.image}" alt="${car.name} Image"/>
          </div>
          <h3 class="car-title">${car.name}</h3>
          <div class="d-flex align-items-center justify-content-between p-4">
            <div>
              <span class="car-capacity">
                <i class="fa-solid fa-user"></i>
                Seats: ${car.seats}
              </span>
              <span class="car-baggage">
                <i class="fa-solid fa-suitcase-rolling"></i>
                Baggage :${car.baggage}
              </span>
            </div>
            
            <!-- Button trigger modal -->
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Book Now
</button>
          </div>
          

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content p-4">
        <div class="d-flex">
          <h4>Your Booking Details</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <hr>
              <div class="booking-details">
               <p>Selected Car : ------------- ${car.name}</p>
              </div>
              <div class="contact-and-pickup-details">
              <h4>Contact and Pickup Details</h4>
              <hr>
              <form id="bookingForm${car.id}" action="https://formspree.io/f/xwkgplyq"  method="POST">
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
  `;

  card.innerHTML = cardContent;
  carsContainer.appendChild(card);
});
