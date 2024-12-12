document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: window.innerWidth < 768 ? 800 : 1000,
        easing: "ease-in-out",
        once: false,
        disable: function () {
            return window.innerWidth < 768;
        },
    });

    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});


