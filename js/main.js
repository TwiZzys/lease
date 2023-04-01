const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

const open = (e) => {
    const tabTarget = e.currentTarget;
    const btn = tabTarget.dataset.button;

    tabItem.forEach(item => {
        item.classList.remove('tabs__btn-item--active');
    });
    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(item => {
        item.classList.remove('tabs__content-item--active');
    });
    document.querySelector(`#${btn}`).classList.add('tabs__content-item--active');
};

tabItem.forEach(item => {
    item.addEventListener('click', open);
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');
});

const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});