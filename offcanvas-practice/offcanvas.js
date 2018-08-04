$(function() {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function() {
        $('.offcanvas-collapse').toggleClass('open');
        $('body').toggleClass('body-offcanvas');
    });

});