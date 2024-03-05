// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    preloadImages: false,
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btns__next',
      prevEl: '.swiper-btns__prev',
    },

    autoplay: {
      delay: 3000,
    },
    effect: 'fade',
    allowTouchMove: false,
  });