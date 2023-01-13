const swiper = new Swiper('.swiper-tags', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.8,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2.6,
      spaceBetween: 10,
      // width: 393,
    },
    500: {
      slidesPerView: 3.6,
      spaceBetween: 10,
      // width: 393,
    },
    930: {
      slidesPerView: 5.07,
      spaceBetween: 10,
      // width: 393,
    },
    1100: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.nex-btn',
  },

});