'use strict';

const menuButton = document.querySelector('.header__menu-btn');
const navList = document.querySelector('.header__nav-list');

if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('header__nav-list--open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
