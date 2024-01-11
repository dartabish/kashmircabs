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
  {
    name: 'Royal Enfield Himalayan',
    seats: 2,
    image: '../../assets/sub-pages/car-rental/himalyan.png',
  },
  {
    name: 'Royal Enfield Classic',
    seats: 2,
    image: '../../assets/sub-pages/car-rental/classic.png',
  },
  {
    name: 'Royal Enfield Thunderbird',
    seats: 2,
    image: '../../assets/sub-pages/car-rental/thunderbird.png',
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
            <button class=" btn btn-warning">Book Now</button>
          </div>
  `;

  card.innerHTML = cardContent;
  carsContainer.appendChild(card);
});
