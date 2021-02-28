//header 
const headerBar = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        headerBar.classList.remove('header-sticky');
    } else {
        headerBar.classList.add('header-sticky');
    }
});

const swiperSlider = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
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
    freeMode: false
});