const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open_btn.addEventListener('click', () => {
    nav.forEach(navl_el => navl_el.classList.add('visible'))
});

close_btn.addEventListener('click', () => {
    nav.forEach(navl_el => navl_el.classList.remove('visible'))
});