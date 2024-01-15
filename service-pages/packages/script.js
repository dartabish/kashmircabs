const journeyGrid = document.querySelector('.journey__grid');

const packages = [
  {
    packageID: 1,
    packageName: '3-Days Kashmir',
    packageModalTitle: 'Three Days Kashmir Package',
    img: '../../assets/sub-pages/packages/package-1.jpg',
    details: {
      duration: {
        days: 3,
        nights: 2,
      },
      tourPlan: {
        day1: 'Day – 1st : Airport to Gulmarg to Srinagar | Night Stay at Srinagar Hotel',
        day2: 'Day – 2nd : Srinagar to Pahalgam to Srinagar | Night Stay Houseboat Dal Lake or Nigeen Lake',
        day3: 'Day – 3rd : City tour shopping and departure',
      },
    },
  },
  {
    packageID: 2,
    packageName: '4-Days Kashmir',
    packageModalTitle: 'Four Days Kashmir Package',
    img: '../../assets/sub-pages/packages/package-2.jpg',
    details: {
      duration: {
        days: 4,
        nights: 3,
      },
      tourPlan: {
        day1: 'Day – 1st : Arrival and Srinagar city tour | Night Stay at Srinagar Hotel',
        day2: 'Day – 2nd : Srinagar to Gulmarg to Srinagar | Night Stay at Srinagar Hotel',
        day3: 'Day – 3rd : Srinagar to Pahlagam to Srinagar| Night Stay Houseboat Dal Lake or Nigeen Lake',
        day4: 'Day – 4th : Gift Shopping and drop to Airport ',
      },
    },
  },
  {
    packageID: 3,
    packageName: '5-Days Kashmir',
    packageModalTitle: 'Five Days Kashmir Package',
    img: '../../assets/sub-pages/packages/package-3.jpg',
    details: {
      duration: {
        days: 5,
        nights: 4,
      },
      tourPlan: {
        day1: 'Day – 1st : Arrival and Srinagar city tour | Night Stay at Srinagar Hotel',
        day2: 'Day – 2nd : Srinagar to Gulmarg to Srinagar | Night Stay at Srinagar Hotel',
        day3: 'Day – 3rd : Srinagar to Pahlagam | Night Stay Pahlagam river side',
        day4: 'Day – 4th : Pahlagam to Srinagar | Night Stay Houseboat Dal Lake or Nigeen Lake',
        day5: 'Day – 5th : Gift Collection and Departure',
      },
    },
  },
  {
    packageID: 4,
    packageName: '7-Days Kashmir',
    packageModalTitle: 'Seven Days Kashmir Package',
    img: '../../assets/sub-pages/packages/package-4.jpg',
    details: {
      duration: {
        days: 7,
        nights: 6,
      },
      tourPlan: {
        day1: 'Day – 1st : Arrival and Transfer to Hotel | Night Stay at Srinagar Hotel',
        day2: 'Day – 2nd : Srinagar City Tour | Night stay at Srinagar Hotel',
        day3: 'Day – 3rd : Sonamarg Day Tour | Night Stay at Srinagar Hotel',
        day4: 'Day – 4th : Gulmarg Day Tour | Night Stay at Gulmarg Hotel',
        day5: 'Day – 5th : Gulmarg to Pahalgam| Night Stay at Pahalgam Hotel',
        day6: 'Day – 6th : Pahalgam to Srinagar | Night stay at Houseboat in Srinagar',
        day7: 'Day – 7th : Gift Collection and Departure',
      },
    },
  },
  {
    packageID: 5,
    packageName: '9-Days Kashmir',
    packageModalTitle: 'Nine Days Kashmir Package',
    img: '../../assets/sub-pages/packages/package-5.jpg',
    details: {
      duration: {
        days: 9,
        nights: 8,
      },
      tourPlan: {
        day1: 'Day – 1st : Arrival and Transfer to Hotel | Night Stay at Srinagar Hotel',
        day2: 'Day – 2nd : Srinagar City Tour | Night stay at Srinagar Hotel',
        day3: 'Day – 3rd : Srinagar to Sonamarg | Night Stay at Sonamarg Hotel',
        day4: 'Day – 4th : Sonamarg Stay  | Night Stay at Sonamarg Hotel',
        day5: 'Day – 5th : Sonamarg to Gulmarg | Night Stay at Gulmarg  Hotel',
        day6: 'Day – 6th : Gulmarg to Pahalgam| Night Stay at Pahalgam Hotel',
        day7: 'Day – 7th : Pahalgam Stay | Night Stay Pahalgam Hotel',
        day8: 'Day – 8th : Pahalgam to Srinagar | Night stay Houseboat Dal Lake or Nigeen Lake',
        day9: 'Day – 9th : Shopping and Departure',
      },
    },
  },
];

packages.forEach(package => {
  const packageCard = document.createElement('div');
  packageCard.className = 'country__card';
  packageCard.innerHTML = `
          <div class="country__card">
            <img src="${package.img}" alt="country" />
            <div class="country__name">
              <span>${package.details.duration.days} Days/ ${
    package.details.duration.nights
  } Nights</span>
            </div>
            <button type="button" class="more-details-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop${
              package.packageID
            }">
            More Details
            </button>
          </div>
          <!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="staticBackdrop${
    package.packageID
  }" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
  <div class="modal-content">
      <div class="modal-header">
        <h1 class="section-title modal-title fs-1" id="staticBackdropLabel" data-package="${
          package.packageModalTitle
        }">${package.packageModalTitle}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="package-details">
            <div class="tour-plan">
              <h2 class="mb-3">Brief Tour Plan</h2>
              <ul>
              ${Object.keys(package.details.tourPlan)
                .map(day => `<li>${package.details.tourPlan[day]}</li>`)
                .join('')}
              </ul>
              </ul>
            </div>
            <div class="amenities">
                <div class="d-flex flex-column flex-xl-row justify-content-center g-2 gap-xl-5">
                    <div class="amenity mb-3">
                        <span class="amenity-icon-container">
                          <i class="fa-solid fa-calendar fa-3x"></i>
                        </span>
                        <span class="amenity-title"> ${
                          package.details.duration.days
                        } DAYS - 
                                ${package.details.duration.nights} NIGHTS
                        </span>
                    </div>
                    <div class="amenity mb-3">
                        <span class="amenity-icon-container">
                          <i class="fa-solid fa-hotel fa-3x"></i>
                        </span>
                        <span class="amenity-title">3 & 4 STAR HOTELS</span>
                    </div>
                    <div class="amenity mb-3">
                        <span class="amenity-icon-container">
                          <i class="fa-solid fa-cutlery fa-3x"></i>
                        </span>
                        <span class="amenity-title">MEALS </span>
                    </div>
                    <div class="amenity ">
                        <span class="amenity-icon-container">
                          <i class="fa-solid fa-car-side fa-3x"></i>
                        </span>
                        <span class="amenity-title">TRANSFERS </span>
                    </div>
                </div>
            </div>
            <div class="book">
            <button id="${
              package.packageID
            }" class="book-package btn btn-primary mt-2">Book Now</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  journeyGrid.appendChild(packageCard);
});

const bookBtns = document.querySelectorAll('.book-package');
bookBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    let selectedPackage;
    switch (e.target.id) {
      case '1':
        selectedPackage = packages[0].packageModalTitle;
        break;
      case '2':
        selectedPackage = packages[1].packageModalTitle;
        break;
      case '3':
        selectedPackage = packages[2].packageModalTitle;
        break;
      case '4':
        selectedPackage = packages[3].packageModalTitle;
        break;
      case '5':
        selectedPackage = packages[4].packageModalTitle;
        break;
    }

    let url =
      'https://wa.me/917006888129?text=' +
      'Hi, I want to book the ' +
      selectedPackage;
    window.open(url, '_blank').focus();
  });
});
