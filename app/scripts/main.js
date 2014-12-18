var App = (function($) {
    "use strict";

    function slideNav() {

        var button = $(".menu__btn"),
            menu   = $(".menu");

        button.on("click", function(e) {
            e.preventDefault();
            menu.toggleClass("do-active");
            button.toggleClass("do-active");
        });
    }

    function arrowScroll() {

        var arrow = $('.btnScroll--header'),
            backToTop = $('.btnScroll--footer');
        //this is where we apply opacity to the arrow
        $(window).scroll(function(){

            //get scroll position
            var topWindow = $(window).scrollTop();

            //multipl by 1.5 so the arrow will become transparent half-way up the page
            var topWindow = topWindow * 1.5;
      
            //get height of window
            var windowHeight = $(window).height();
          
            //set position as percentage of how far the user has scrolled 
            var position = topWindow / windowHeight;
            //invert the percentage
            position = 1 - position;

            //define arrow opacity as based on how far up the page the user has scrolled
            //no scrolling = 1, half-way up the page = 0
            arrow.css('opacity', position);

            //display back to top button
            if (topWindow > 200) {
                backToTop.addClass('js-show');
            } else {
                backToTop.removeClass('js-show');
            }
        });  
    }

    function smoothScroll() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
    }

    function delayAnim() {
        var animH2 = document.getElementById("js-slide1"),
            animH1 = document.getElementById("js-slide2");

        animH2.style.opacity = "0";
        animH1.style.opacity = "0";

        setTimeout(function() {
            animH2.setAttribute("class", "slide1");
            animH2.style.opacity = "1";
        }, 500);

        setTimeout(function() {
            animH1.setAttribute("class", "slide2");
            animH1.style.opacity = "1";
        }, 800);
    }

    return {
        slideNav: slideNav,
        arrowScroll: arrowScroll,
        smoothScroll: smoothScroll,
        delayAnim: delayAnim
    };

})(jQuery);

App.slideNav();
App.arrowScroll();
App.smoothScroll();
App.delayAnim();