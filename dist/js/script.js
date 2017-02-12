$(document).ready(function () {
    var navbar = $('#navbar');

    $('.scroll').on('click', function (e) {
        e.preventDefault();
        if (navbar.hasClass('fixed')) {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 85
            }, 1000);
        } else {
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);
        }

        navbar.removeClass('active');
    });
    $('#burger').on('click', function () {
        navbar.toggleClass('active');
    });

    $(window).on('scroll', function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop,
            offsetTop = $('#about').offset().top;
        if (scrolled >= offsetTop -85 && !navbar.hasClass('.fixed')) {
            navbar.addClass('fixed');
            $('body').addClass('with-padding');
        } else {
            navbar.removeClass('fixed');
            $('body').removeClass('with-padding');
        }
    });

});



