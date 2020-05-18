import '../scss/main.scss';

$(() => {

    //SLidER
    const prev = $('.fa-chevron-left');
    const next = $('.fa-chevron-right');
    const slider = $('.slider');
    let currentSlide = 0;

    slider.children().eq(currentSlide).addClass('visible');

    prev.on('click', () => {
        slider.children().eq(currentSlide).removeClass('visible');
        currentSlide = currentSlide === 0 ? slider.children().length - 1 : currentSlide - 1;
        slider.children().eq(currentSlide).addClass('visible');
    });

    next.on('click', () => {
        slider.children().eq(currentSlide).removeClass('visible');
        currentSlide = currentSlide === slider.children().length - 1 ? 0 : currentSlide + 1;
        slider.children().eq(currentSlide).addClass('visible');
    });

    function cycleSlider() {
        next.trigger('click');
    };

    var interval = setInterval(cycleSlider, 2000);
    //SLIDER_END

    const sliderLeft = $('.sliderLeft');
    const sliderRight = $('.sliderRight');
    const carousel = $('.carousel');

    sliderLeft.hover(() => {
        prev.addClass('zoom');
        $(this).css('background', 'rgba(0,0,0,0.025)');
        clearInterval(interval);

    }, () => {
        prev.removeClass('zoom');
        $(this).css('background', 'white');

    });

    sliderRight.hover(() => {
        next.addClass('zoom');
        $(this).css('background', '#292c30');
        clearInterval(interval);
    }, () => {
        next.removeClass('zoom');
        $(this).css('background', 'white');

    });

    sliderRight.mouseleave(() => {
        interval = setInterval(cycleSlider, 2000);
    });

    sliderLeft.mouseleave(() => {
        interval = setInterval(cycleSlider, 2000);
    });

    const offerMenu = $('.offerMenu');
    const dropMenu = $('.dropMenu');
    offerMenu.mouseenter(() => {
        dropMenu.slideDown(100);
    }
    );

    offerMenu.mouseleave(() => { dropMenu.slideUp(100) });

    const textiles = $('.textiles');

    textiles.on('click', () => {
        textiles.next().toggle();
    });


});



