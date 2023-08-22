window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.hamburger');
    overlay = document.querySelector('.header__overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header__menu-active');
        overlay.classList.toggle('header__overlay-active');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('hamburger-active');
        menu.classList.remove('header__menu-active');
        overlay.classList.remove('header__overlay-active');
    });
})