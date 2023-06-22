import {Swiper} from 'swiper/bundle'

const swiperCaption = new Swiper('.caption-swiper', {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3200,
    },
    slidesPerView: 1,
    spaceBetween: 50,
})


const swiperNews = new Swiper('.news-swiper', {
    navigation: {
        nextEl: '.news-swiper__swiper-button-next',
        prevEl: '.news-swiper__swiper-button-prev'
    },

    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',

    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    }
})

const swiperBg = new Swiper('.bg-swiper', {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
        nextEl: '.bg-swiper-next',
        prevEl: '.bg-swiper-prev'
    },
})


const swiperFaculty = new Swiper('.faculty-swiper', {
    navigation: {
        nextEl: '.faculty-swiper__swiper-button-next',
        prevEl: '.faculty-swiper__swiper-button-prev'
    },

    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',

    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    }
})


const swiperSponsors = new Swiper('.sponsors-swiper', {
    navigation: {
        nextEl: '.sponsors-swiper__swiper-button-next',
        prevEl: '.sponsors-swiper__swiper-button-prev'
    },

    slidesPerView: 1,
    spaceBetween: 30,
     breakpoints: {

        600: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 45
        },
        1400: {
            slidesPerView: 5,
        },
    }
})

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

const swiperMediaCenter = new Swiper('.swiper-media-center', {
    navigation: {
        nextEl: '.media-center-next',
        prevEl: '.media-center-prev'
    },
    loop: true,

})
