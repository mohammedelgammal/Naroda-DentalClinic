//header 
const headerBar = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        headerBar.classList.remove('header-sticky');
    } else {
        headerBar.classList.add('header-sticky');
    }
});

const closer = document.querySelector('.closer');
const menu = document.querySelector('.floating-menu');
let hamburger = document.querySelector('.left-hand-content svg');

closer.addEventListener('click', () => {
    closer.style.animation = 'fadeout 0.5s ease';
    closer.style.opacity = 0;
    closer.style.zIndex = -1;
    menu.style.transform = 'translateX(-400px)';
    hamburger.style.transform = 'rotateZ(0deg)';
});

hamburger.addEventListener('click', () => {
    if(closer.style.animation === 'fadein 0.5s ease'||
    closer.style.opacity === 0.3||
    closer.style.zIndex === 9||
    menu.style.transform === 'translateX(0px)'||hamburger.style.transform === 'rotateZ(90deg)'){
        closer.style.animation = 'fadeout 0.5s ease';
        closer.style.opacity = 0;
        closer.style.zIndex = -1;
        menu.style.transform = 'translateX(-400px)';
        hamburger.style.transform = 'rotateZ(0deg)';
    } else {
        closer.style.animation = 'fadein 0.5s ease';
        closer.style.opacity = 0.3;
        closer.style.zIndex = 9;
        menu.style.transform = 'translateX(0px)';
        hamburger.style.transform = 'rotateZ(90deg)';
    }
});

let swiperSlider = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    freeMode: false,
    breakpoints: {
        320: {
            slidesPerView: 1.05,
            spaceBetween: 20
        },
        688: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1312: {
            slidesPerView: 3.5,
            spaceBetween: 50
        },
        1500: {
            slidesPerView: 5.5,
            spaceBetween: 50
        }
    }    
});