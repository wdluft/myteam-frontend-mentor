const mobileToggleBtns = document.querySelectorAll('.nav__mobileMenuToggle');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobileMenu');
const profileBtns = document.querySelectorAll('.teamMember__btn');
const profiles = document.querySelectorAll('.teamMember');

// NAV
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

// ABOUT BIO TOGGLE
const closeBio = (btn) => {
  // remove open class from bio
  btn.previousElementSibling.lastElementChild.classList.remove('teamMember__bio--open')
  // remove close class from button, change svg to expand, add expand class
  btn.classList.remove('teamMember__btn--close');
  btn.classList.add('teamMember__btn--expand');
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
      <path fill="#012F34" fill-rule="evenodd" d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"/>
    </svg>
  `;
}

const openBio = (btn) => {
  // add open class to bio
  console.log(btn.previousElementSibling.lastElementChild);
  btn.previousElementSibling.lastElementChild.classList.add('teamMember__bio--open')
  // add close class to button, change svg to close, remove expand class
  btn.classList.add('teamMember__btn--close');
  btn.classList.remove('teamMember__btn--expand');
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17">
      <path fill="#FFF" fill-rule="evenodd" d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"/>
    </svg>
  `;

}

const toggleBio = (btn) => {
  btn.classList.contains('teamMember__btn--expand') ? openBio(btn) : closeBio(btn);
}

profileBtns.forEach(btn => {
  btn.addEventListener('click', () => toggleBio(btn));
});