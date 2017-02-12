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

    //анимированные счетчики

    var show = true;
    var skillbox = "#skills";
    $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(skillbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа

        var e_height = $(skillbox).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }
    });

});

