import Swiper from 'swiper';

// document.addEventListener('load', function () {
    const mySwiper = new Swiper('.swiper-container', {
        autoHeight: true,
        direction: 'vertical',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');
    nextBtn.addEventListener('click', function () {
        mySwiper.slideNext();
    });
    prevBtn.addEventListener('click', function () {
        mySwiper.slidePrev();
    });
// });