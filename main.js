// NOTE Toggler Menu
// (function ($) {
//     "use strict";
//     var NAY = {};
//     NAY.MenuTogglerClose = function () {
//         $(".toggler-menu").on('click', function () {
//             $('.header-left').stop().toggleClass('menu-open');
//         });

//         $('.header-left a').on('click', function () {
//             var toggle = $('.toggler-menu');
//         });
//     }

//     $(document).on("ready", function () {
//         NAY.MenuTogglerClose()
//     });
// })(jQuery);

// NOTE Project Filter

// For-filter-menu

// $(document).on('click', '.project-filter li', function () {
//     $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
// });

// // For-Project/work-filter

// $(document).ready(function () {
//     $('.list').click(function () {
//         const value = $(this).attr('data-filter');
//         if (value == 'all') {
//             $('project-box').show('1000');
//         } else {
//             $('.project-box').not('.' + value).hide('1000');
//             $('.project-box').filter('.' + value).show('1000');
//         }
//     })
// })

// NOTE Scroll Fade in

window.onload = function () {
    const effect = document.querySelector('.content');
    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
        if (window.scrollY >= 500) {
            effect.style.opacity = '1';
            effect.style.transform = 'translateX(0px)';
            effect.style.transition = '1s ease-in-out';
        } else {
            effect.style.opacity = '0';
            effect.style.transform = 'translateX(-50px)';
        }
    }
    scrollEffect();
};


