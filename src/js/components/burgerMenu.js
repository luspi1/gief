// показ/скрытие мобильного меню

const burgerMobile = document.querySelector('.header__burger-mobile');
const closeMenu = document.querySelector('.header__close-mobile');
const header = document.querySelector('.header');

burgerMobile.addEventListener('click', ()=>{
  header.classList.add('_mobile-active');
  document.body.style.overflow = 'hidden'

})
closeMenu.addEventListener('click',()=> {
  header.classList.remove('_mobile-active');
  document.body.style.overflow = ''
} )
