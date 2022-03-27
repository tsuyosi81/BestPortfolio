// NOTE Toggler Menu

(function ($) {
    "use strict";
    var NAY = {};
    NAY.MenuTogglerClose = function () {
        $(".toggler-menu").on('click', function () {
            $('.header-left').stop().toggleClass('menu-open');
        });

        $('.header-left a').on('click', function () {
            var toggle = $('.toggler-menu');
        });
    }

    $(document).on("ready", function () {
        NAY.MenuTogglerClose()
    });
})(jQuery);

// NOTE Project Filter

// For - filter - menu

$(document).on('click', '.project-filter li', function () {
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});

// For-Project/work-filter

$(document).ready(function () {
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('project-box').show('1000');
        } else {
            $('.project-box').not('.' + value).hide('1000');
            $('.project-box').filter('.' + value).show('1000');
        }
    })
})

// NOTE Scroll Fade in

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        };
    };
};

