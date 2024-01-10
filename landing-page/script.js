let destinationSwiper = new Swiper('.destinations-swiper', {
  slidesPerView: 1, // Number of slides per view on desktop
  spaceBetween: 0, // No space between slides
  loop: true,
  navigation: {
    nextEl: '.next-destination',
    prevEl: '.prev-destination',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1, // Number of slides per view on mobile
      spaceBetween: 10,
    },
  },
});

let reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.next-review',
    prevEl: '.prev-review',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    998: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
