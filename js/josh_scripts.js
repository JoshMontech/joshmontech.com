

/*$(document).ready(function() {
    var isshow = localStorage.getItem('isshow');
    if (isshow == null) {
        localStorage.setItem('isshow', 1);
    } else {
        $('.loader').remove();
        $('.loader-wrapper').remove();
        $('.loader-section').remove();
        $('.section-left').remove();
        $('.loader-right').remove();
    }
});*/

$(window).on('load', function () {
    
      setTimeout(function(){
        $('body').addClass('loaded');

    }, 500);
    
 });


 /*
$(window).load(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');

    }, 500);
    
    
    $('body').addClass('loaded');
    
 
});
*/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
};

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 100);
  });
