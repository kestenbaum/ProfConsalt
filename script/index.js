//const
const getSelectorBurgerMenu = document.querySelector('.burger')
const getSelectorNavigateList = document.querySelector('.nav-list')

//BurgerMenu functional
getSelectorBurgerMenu.onclick = function (){
    getSelectorBurgerMenu.classList.toggle('burger-active')
    getSelectorNavigateList.classList.toggle('nav-list__active')
}

window.onclick = function (event){
    const target = event.target

    target.classList.contains('btn-link') && target.classList.toggle('btn__card--active')

    if(target.classList.contains('nav-link')) {
        getSelectorBurgerMenu.classList.toggle('burger-active')
        getSelectorNavigateList.classList.toggle('nav-list__active')
    }
}

//Sliders
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        499: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1148: {
            slidesPerView: 4,
        },
    },
});

const swip = new Swiper('.slider-container', {
    loop: true,
    navigation: {
        nextEl: '.left',
        prevEl: '.right',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    breakpoints: {
        690: {
            slidesPerView: 2,
        },
    },
});