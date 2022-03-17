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

// $(function () {
//     var $grid = $('#tp-grid'),
//         $name = $('#name'),
//         $close = $('#close'),
//         $loader = $('').insertBefore($grid),
//         stapel = $grid.stapel({
//             randomAngle: true,
//             delay: 50,
//             gutter: 70,
//             pileAngles: 5,
//             onLoad: function () {
//                 $loader.remove();
//             },
//             onBeforeOpen: function (pileName) {
//                 $name.html(pileName);
//             },
//             onAfterOpen: function (pileName) {
//                 $close.show();
//             }
//         });
//     $close.on('click', function () {
//         $close.hide();
//         $name.empty();
//         stapel.closePile();
//     });


//     jQuery(function ($) {
//         "use strict";
//         $('#flat').cubeportfolio({
//             filters: '#flat',
//             layoutMode: 'mosaic',
//             sortByDimension: true,
//             mediaQueries: [{
//                 width: 1300,
//                 cols: 6,
//             }, {
//                 width: 1100,
//                 cols: 6,
//             }, {
//                 width: 920,
//                 cols: 6,
//             }, {
//                 width: 400,
//                 cols: 1,
//                 options: {
//                     gapHorizontal: 15,
//                     gapVertical: 15,
//                 }
//             }],
//             defaultFilter: '*',
//             animationType: 'fadeOutTop',
//             gapHorizontal: 0,
//             gapVertical: 0,
//             gridAdjustment: 'responsive',
//             caption: 'zoom',
//             lightboxDelegate: '.cbp-lightbox',
//             lightboxGallery: true,
//             lightboxTitleSrc: 'data-title',
//         });
//     });