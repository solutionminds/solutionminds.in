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
                $('.back-to-top').fadeIn(200);
            } else {
                $('.back-to-top').fadeOut(200);
            }
        });

        // animation for Back to top button --------
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 1500);
        });

        // Hamburger-menu --------
        $('.hamburger-menu').on('click', function () {
            // Toggle classes for hamburger icon
            $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom').toggleClass('current');
            // Toggle ofcanvas menu visibility
            $('.ofcavas-menu').toggleClass('current');
        });

        // Close menu when a menu item is clicked
        $('.ofcavas-menu a').on('click', function () {
            // Close the menu
            $('.hamburger-menu .line-top, .hamburger-menu .line-center, .hamburger-menu .line-bottom').removeClass('current');
            $('.ofcavas-menu').removeClass('current'); // Also hide the menu
        });

        // smartScroll -------------
        smartScroll.init({
            speed: 700,
            addActive: false,
            activeClass: "active",
            offset: 350
        }, function () {
            console.log("callback");
        });

        // wow animation --------------
        new WOW().init();
    });
})(jQuery);
