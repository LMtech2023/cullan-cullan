'use strict';

const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-btn');
const navList = document.querySelector('.header__nav-list');
const navLinks = document.querySelectorAll('.header__nav-list a');
const contactForm = document.querySelector('.contact__form-el');

function setMenuOpen(isOpen) {
  if (!menuButton || !navList) {
    return;
  }

  navList.classList.toggle('header__nav-list--open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  header?.classList.toggle('header--open', isOpen);
}

function closeMenu() {
  setMenuOpen(false);
}

if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    const isOpen = !navList.classList.contains('header__nav-list--open');
    setMenuOpen(isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!header?.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) {
      closeMenu();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.alert('Thank you — this is a design mockup and does not submit data.');
  });
}
