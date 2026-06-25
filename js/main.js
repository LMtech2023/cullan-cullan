'use strict';

const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__menu-btn');
const navList = document.querySelector('.header__nav-list');
const navLinks = document.querySelectorAll('.header__nav-list a');

function setMenuOpen(isOpen) {
  if (!navList || !menuButton) {
    return;
  }

  navList.classList.toggle('header__nav-list--open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
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
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });
}
