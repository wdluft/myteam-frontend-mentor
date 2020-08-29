const mobileToggleBtns = document.querySelectorAll('.nav__mobileMenuToggle');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobileMenu');

const closeMenu = () => {
  body.classList.remove('no-scroll');
  mobileMenu.classList.remove('mobileMenu--open')
}
const openMenu = () => {
  body.classList.add('no-scroll');
  mobileMenu.classList.add('mobileMenu--open')
}
const toggleMenu = () => {
  mobileMenu.classList.contains('mobileMenu--open') ? closeMenu() : openMenu();
}
mobileToggleBtns.forEach(btn => {
  btn.addEventListener('click', toggleMenu)});
