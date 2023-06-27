//изменение ссылки в кнопке слайдера в зависимости от слайда

const swiperDataLinks = document.querySelectorAll('.header__slider-caption .swiper-slide')
const captionSwiperBtn = document.querySelector('.caption-swiper__btn')


if (swiperDataLinks) {
  const changeLinkSlider = () => {
    swiperDataLinks.forEach(element => {
      if (element.classList.contains('swiper-slide-active')) {
        location.href = element.dataset.link
      }
    })
  }

  captionSwiperBtn.addEventListener('click', () => {
    changeLinkSlider()
  })

  const mediaQuery = window.matchMedia('(max-width: 768px)')

  if (mediaQuery.matches) {
    swiperDataLinks.forEach(el => {
      el.addEventListener('click', (e) => {
        location.href = e.currentTarget.dataset.link
      })
    })
  }
}



