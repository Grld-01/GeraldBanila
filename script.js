$(document).ready(function() {

    $(window).scroll(function() {

        var height = $('.container').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 40) {
            $('.header').addClass('solid-nav');
        } else {
            $('.header').removeClass('solid-nav');
        }

    });
});