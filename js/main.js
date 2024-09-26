(function ($) {

    $(document).ready(function () {

        // sticky header --------
        function sticky_header(){
            var wind = $(window);
            var sticky = $('.header_area');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 50) {
                    sticky.removeClass('header_fixed');
                } else {
                    sticky.addClass('header_fixed');
                }
            });
        }
        sticky_header();


        //  Back to top button --------
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });


        // animation for Back to top button --------
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });


        // Hamburger-menu --------
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        // smartScroll -------------
        smartScroll.init({
            speed: 700, // default 500
            addActive: false, // default true
            activeClass: "active", // default active
            offset: 350 // default 100
        }, function () {
            console.log("callback");
        });


        // wow animation --------------
        new WOW().init();



        
    });

})(jQuery);