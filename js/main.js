$(function () {
    $('.info__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="38" height="63" viewBox="0 0 38 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="fill-item" d="M0 6.654L6.7486 0L38 31.5L6.7486 63L0 56.346L24.797 31.5L0 6.654Z" fill="#009540"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="38" height="63" viewBox="0 0 38 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="fill-item" d="M38 56.346L31.2514 63L0 31.5L31.2514 0L38 6.65399L13.203 31.5L38 56.346Z" fill="#009540"/></svg></button>',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,  
                }
            },
            {
                breakpoint: 951,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });
});

