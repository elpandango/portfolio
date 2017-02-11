$(document).ready(function(){

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false
    });

    $('#burger').on('click', function(){
        $(this).closest('header.main').toggleClass('active');
        //$('header.main').find('.dropdown').slideUp(500);
    });

});
