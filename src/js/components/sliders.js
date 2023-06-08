import { Swiper } from "swiper/bundle";

const swiperCaption = new Swiper('.caption-swiper', {
  navigation: {
    nextEl: '.caption-swiper__swiper-button-next',
    prevEl: '.caption-swiper__swiper-button-prev'
  },

  slidesPerView: 1,

});


const swiperNews = new Swiper('.news-swiper', {
  navigation: {
    nextEl: '.news-swiper__swiper-button-next',
    prevEl: '.news-swiper__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      spaceBetween: 27,
      slidesPerView: 4,
    },
  }
});


const swiperFaculty = new Swiper('.faculty-swiper', {
  navigation: {
    nextEl: '.faculty-swiper__swiper-button-next',
    prevEl: '.faculty-swiper__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      spaceBetween: 25,
      slidesPerView: 4,
    },
  }
});


const swiperSponsors = new Swiper('.sponsors-swiper', {
  navigation: {
    nextEl: '.sponsors-swiper__swiper-button-next',
    prevEl: '.sponsors-swiper__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 25
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 25
    },
    1280: {
      spaceBetween: 33,
      slidesPerView: 7,
    },
  }
});

const swiperNewsItem = new Swiper('.news-item-page__slider', {
  navigation: {
    nextEl: '.news-item-page__slider-button-next',
    prevEl: '.news-item-page__slider-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  slidesPerView: 1,
  spaceBetween: 5,
})
