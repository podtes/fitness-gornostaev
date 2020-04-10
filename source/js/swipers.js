'use strict';

(function () {
  if (window.main.getWindowWidth() < 768) {
    return new window.Swiper('#trainers-swiper.swiper-container', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    if (window.main.getWindowWidth() < 1200) {
      return new window.Swiper('#trainers-swiper.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else {
      return new window.Swiper('#trainers-swiper.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
})();

