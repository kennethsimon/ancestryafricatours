$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.owl-carousel').owlCarousel({
        margin:10,
        autoplay: true,
        loop: true,
        autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
});
//document.addEventListener('contextmenu', event => event.preventDefault());