function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();



$(document).ready(function () {
    $('.headerup__burger').click(function (event) {
        $('.headerup__burger,.headerup__menu,.headerup__logo').toggleClass('active');
        $('body').toggleClass('lock')
    });
});




let isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
} else {
    body.classList.add('mouse');
}

$(document).ready(function () {
    $('.slider__item').slick({
        arrows: true,
        
        slidesToShow: 1,
        responsive:[
            {
                breakpoint: 1100,
                settings:{
                    arrows: false,

                }
            }, {
                breakpoint: 767,
                settings:{
                    dots: false,
                    arrows: false,
                }
            }]
    });
});

$(document).ready(function () {
    $('.block__title').click(function (event) {
        if ($('columns-about__block .block').hasClass('one')) {
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300)
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function () {
    $('.slider-clients').slick({
        arrows: false,
        slidesToShow: 1,
        dots:true,
    });
});