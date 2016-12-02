

$(document).ready(function(){
        $('.carousel.carousel-slider').carousel({full_width: true});
        $('.carousel').carousel({dist:0});
        window.setInterval(function(){$('.carousel').carousel('next')},3000)
          $(".button-collapse").sideNav();
     });
