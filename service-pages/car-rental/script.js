const carsContainer = document.querySelector('.cars-container');
const carCollections = [
  { name: 'Toyota Etios', seats: 4, baggage: 3 },
  { name: 'Honda Amaze', seats: 4, baggage: 3 },
  { name: 'Maruti Swift DZire', seats: 4, baggage: 3 },
  { name: 'Toyota Glanza', seats: 4, baggage: 3 },
  { name: 'Toyota Innova ', seats: 6, baggage: 5 },
  { name: 'Toyota Crysta', seats: 6, baggage: 5 },
  { name: 'Maruti Suzuki Ertiga', seats: 6, baggage: 4 },
  { name: 'Chevrolet Tavera', seats: 8, baggage: 6 },
  { name: 'Tempo Traveller 12', seats: 12, baggage: 8 },
  { name: 'Tempo Traveller 17', seats: 17, baggage: 15 },
  { name: 'Tempo Traveller 25', seats: 25, baggage: 15 },
  { name: 'Urbania', seats: 17, baggage: 12 },
];

carCollections.forEach(car => {
  let card = document.createElement('div');
  card.className = 'car-card';

  let cardContent = `
          <div class="car-img-container">
            <img src="../../assets/landing-page/cab-service-banner.png" alt="" />
          </div>
          <h3 class="car-title">${car.name}</h3>
          <div class="d-flex align-items-center justify-content-between">
          <div >
            <span class="car-capacity">
            <i class="fa-solid fa-user"></i>
            Seats: ${car.seats} </span>
            <span class="car-baggage">
            <i class="fa-solid fa-suitcase-rolling"></i>
            Baggage :${car.baggage} </span>
          </div>
          <button class=" btn btn-warning">Book Now</button>
          </div>
  `;

  card.innerHTML = cardContent;
  carsContainer.appendChild(card);
});
