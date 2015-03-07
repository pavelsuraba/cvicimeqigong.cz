var App = (function($) {
    "use strict";

    function isHeightMore(height) {
        if(document.documentElement.clientHeight > height) {
            return true;
        } else {
            return false;
        }
    }

    function isWidthLess(width) {
        if(document.documentElement.clientWidth < width) {
            return true;
        } else {
            return false;
        }
    }

    function isWidthMore(width) {
        if(document.documentElement.clientWidth > width) {
            return true;
        } else {
            return false;
        }
    }


    function slideNav() {

        var button = $(".menu__btn"),
            menu   = $(".navigation"),
            item   = $(".navigation__item a");

        button.on("click", function(e) {
            e.preventDefault();
            menu.toggleClass("js-active");
            button.toggleClass("js-active");
        });

        item.on("click", function(e) {

            if(isWidthLess(1023)) {
                e.preventDefault();
                menu.toggleClass("js-active");
                button.toggleClass("js-active");
            }
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

    function slideText() {
        var text   = $(".section__slide"),
            button = $(".button--more");

        button.on("click", function() {
            text.toggleClass("section__slide--expand");

                if(text.hasClass("section__slide--expand")) {

                    setTimeout(function() {
                        button.text("Méně");
                    }, 1300);
    
                } else {

                    setTimeout(function() {
                        button.text("Více");
                    }, 1500);
                }
        });
    }

        /* Windows Phone 8 viewport issue */
    function ieViewport() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var msViewportStyle = document.createElement("style");
            msViewportStyle.appendChild(
                document.createTextNode(
                    "@-ms-viewport{width:auto!important}"
                )
            );
            document.getElementsByTagName("head")[0].
                appendChild(msViewportStyle);
        }
    }

    return {
        slideNav: slideNav,
        arrowScroll: arrowScroll,
        smoothScroll: smoothScroll,
        ieViewport: ieViewport,
        slideText: slideText
    };

})(jQuery);

App.slideNav();
App.arrowScroll();
App.smoothScroll();
App.ieViewport();
App.slideText();